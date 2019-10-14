#!/bin/bash

API="http://localhost:4741"
URL_PATH="/pieces"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "piece": {
      "title": "'"${TITLE}"'",
      "composer": "'"${COMPOSER}"'"
    }
  }'

echo
