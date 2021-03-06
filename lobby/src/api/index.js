import { BACKEND_URL } from '../config';

export const getLobbies = () => {
    return fetch(`${BACKEND_URL}/api/lobby/get_lobbies`)
}

export const createLobby = (payload) => {
    return fetch(`${BACKEND_URL}/api/lobby/create_lobby`, { 
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{
            'Content-Type': 'application/json'
        }
    })
}

export const joinLobby = (lobby, player) => {
    return fetch(`${BACKEND_URL}/api/lobby/join_lobby?lobby=${lobby}&player=${player}`)
}