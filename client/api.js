import request from 'superagent'

const defectUrl = 'http://localhost:3000/api/v1/defects/'

export function getDefects () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addDefect (newDefect) {
  return request
    .post(defectUrl)
    .send(newDefect)
    .then(response => response.body)
}

export function updateDefect () {

}

export function getComments () {

}

export function addComment () {

}