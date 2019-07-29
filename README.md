# Hexgl Node
Containerized Hexgl game with node as server

# Docker commands

docker build

``docker build -t hexgl .``

docker run 

``docker run -e PORT=5000 -p 5000:5000 hexgl``

Navigate to ``http://localhost:5000`` to start the game
