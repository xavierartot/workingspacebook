export const UNCONNECT = 'UNCONNECT'
export const CONNECT = 'CONNECT'

export function unconnectAuth(unconnect) {
  return {
    type: UNCONNECT,
    unconnect,
  }
}
export function connectAuth(connect) {
  return {
    type: CONNECT,
    connect,
  }
}
