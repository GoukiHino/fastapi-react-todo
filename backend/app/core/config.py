import secrets
from typing import List, Optional

from dotenv import find_dotenv

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "FastAPI Todo"

    API_PREFIX: str = "/api/v1"
    SECRET_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_SECONDS: int = 60 * 60 * 24

    CORS_ORIGINS: str

    DB_DIALECT: str
    DB_HOST: Optional[str] = None
    DB_PORT: Optional[str] = None
    DATABASE: str
    DB_USERNAME: Optional[str] = None
    DB_PASSWORD: Optional[str] = None

    @property
    def ALL_CORS_ORIGINS(self) -> List[str]:
        return self.CORS_ORIGINS.split(",")

    @property
    def DB_URI(self) -> str:
        uri = f"{self.DB_DIALECT}://"
        if self.DB_USERNAME and self.DB_PASSWORD:
            uri += f"{self.DB_USERNAME}:{self.DB_PASSWORD}"
        if self.DB_HOST and self.DB_PORT:
            uri += f"@{self.DB_HOST}:{self.DB_PORT}"
        uri += f"/{self.DATABASE}"
        return uri

    model_config = SettingsConfigDict(
        env_file=find_dotenv()
    )


settings = Settings()
