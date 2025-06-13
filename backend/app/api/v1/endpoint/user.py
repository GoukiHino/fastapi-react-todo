from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError

from app import crud, model, schema
from app.api.deps import get_db, get_current_user

router = APIRouter()


@router.get("/me", response_model=schema.UserResponse)
def get_me(current_user: model.User = Depends(get_current_user)):
    return current_user


@router.post("/", response_model=schema.UserResponse)
def create(obj_in: schema.UserCreate, db: Session = Depends(get_db)):
    try:
        return crud.user.create(db, obj_in)
    except IntegrityError:
        raise HTTPException(
            status_code=400,
            detail="This username is already taken"
        )
