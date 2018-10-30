export const UNCONNECT = 'UNCONNECT'
export const CONNECTED = 'CONNECTED'

export function connect(connect) {
  return {
    type: UNCONNECT,
    connect,
  }
}
export function connected(unconnect) {
  return {
    type: CONNECTED,
    unconnect,
  }
}
