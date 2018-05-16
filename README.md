# Pommerman Board Builder

This is a simple board builder to help you transform initial board state. It is a web app build on create react app. 

# Getting Started

To get started you need to have node and npm install. If you already have it installed, run the following commands to install deps and start the app.

```
npm install
npm run start
```

# Note

For the time being you need to load an initial state. Below is a simple one you can copy and paste.

```
{
    "agents": "[{\"agent_id\": 0, \"is_alive\": true, \"position\": [2, 1], \"ammo\": 1, \"blast_strength\": 3, \"can_kick\": false}, {\"agent_id\": 1, \"is_alive\": true, \"position\": [11, 2], \"ammo\": 1, \"blast_strength\": 3, \"can_kick\": false}, {\"agent_id\": 2, \"is_alive\": true, \"position\": [10, 11], \"ammo\": 1, \"blast_strength\": 3, \"can_kick\": false}, {\"agent_id\": 3, \"is_alive\": true, \"position\": [1, 11], \"ammo\": 1, \"blast_strength\": 3, \"can_kick\": false}]",
    "board": "[[0, 1, 1, 0, 1, 2, 2, 0, 1, 1, 0, 1, 1], [1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 14, 0], [1, 11, 0, 1, 0, 2, 2, 0, 1, 0, 1, 0, 2], [0, 0, 1, 0, 1, 2, 0, 0, 1, 1, 1, 0, 1], [1, 2, 0, 1, 0, 0, 2, 0, 1, 0, 2, 2, 2], [2, 2, 2, 2, 0, 0, 1, 1, 2, 2, 0, 2, 2], [2, 2, 2, 0, 2, 1, 0, 2, 0, 0, 1, 2, 0], [0, 2, 0, 0, 0, 1, 2, 0, 2, 1, 1, 2, 1], [1, 2, 1, 1, 1, 2, 0, 2, 0, 1, 0, 2, 1], [1, 0, 0, 1, 0, 2, 0, 1, 1, 0, 2, 0, 0], [0, 0, 1, 1, 2, 0, 1, 1, 0, 2, 0, 13, 0], [1, 0, 12, 0, 2, 2, 2, 2, 2, 0, 0, 0, 1], [1, 0, 2, 1, 2, 2, 0, 1, 1, 0, 0, 1, 0]]",
    "board_size": "13",
    "bombs": "[]",
    "flames": "[]",
    "items": "[[[12, 4], 8], [[8, 1], 9], [[7, 11], 6], [[1, 4], 8], [[6, 2], 6], [[5, 2], 8], [[12, 5], 9], [[11, 7], 7], [[4, 11], 8], [[9, 10], 6], [[1, 6], 8], [[5, 11], 8], [[7, 8], 6], [[8, 7], 7], [[10, 4], 7], [[6, 11], 8], [[11, 4], 8], [[5, 8], 7], [[2, 12], 9], [[12, 2], 7], [[11, 6], 9], [[5, 3], 7], [[3, 5], 9], [[7, 1], 8], [[5, 1], 6]]",
    "step_count": "1"
}
```

# Contributing

PRs are welcome and are needed. This app is just getting off the ground.

The general workflow for commiting code.

* Fork the repository
* Create a local branch for your fix
* Commit your changes and push your created branch to your fork
* Open a new pull request into our master branch