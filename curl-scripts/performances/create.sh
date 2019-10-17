#!/bin/bash

API="http://localhost:4741"
URL_PATH="/performances"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "performance": {
      "date": "'"${DATE}"'",
      "time": "'"${TIME}"'",
      "location": "'"${LOCATION}"'",
      "pieces": [],
      "intermission": "'"${INTERMISSION}"'",
      "length": "'"${LENGTH}"'"
    }
  }'

echo
