#!/bin/bash

API="http://localhost:4741"
URL_PATH="/performances"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "performance": {
      "time": "'"${TIME}"'"
      }
    }'

echo
