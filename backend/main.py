from fastapi import FastAPI

app = FastAPI(title="Auron OS API")

@app.get("/")
def read_root():
    return {"message": "Welcome to Auron OS Backend!"}

