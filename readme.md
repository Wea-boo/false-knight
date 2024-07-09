# false-knight's documentation
## Base URL
http://localhost:3000/api
## Endpoints

### 1. Get All Characters
**Endpoint:** `GET /characters`

**Description:** Retrieve a list of all game characters with cursor-based pagination.

**Query Parameters:**
- `limit` (optional): Number of characters to retrieve. Default is 10.
- `cursor` (optional): The ID of the last character from the previous page to start the next page.

**Response:**
```json
{
  "characters": [
    {
      "_id": "60a6f9bf7b1f4c10b8b78a56",
      "name": "Aragorn",
      "role": "warrior",
      "race": "human",
      "level": 50
    }
  ],
  "nextCursor": "60a6f9bf7b1f4c10b8b78a57"
}
```

### 2. Get Character by ID
**Endpoint:** `GET /characters/:id`

**Description:** `Retrieve a specific game character by ID.`

**Path Parameters:**
- `id`: The unique identifier of the character.

**Response:**
```json
{
  "_id": "60a6f9bf7b1f4c10b8b78a56",
  "name": "Aragorn",
  "role": "warrior",
  "race": "human",
  "level": 50
}
```
### 3. Create Character
**Endpoint:** `POST /characters`

**Description:** Create a new game character.

**Request Body:**
```json
{
  "name": "Aragorn",
  "role": "warrior",
  "race": "human",
  "level": 50
}
```

**Validation:**
- **name** is required and should not be empty.
- **class** is required and must be one of: warrior, mage, archer, rogue, paladin, healer, barbarian, necromancer, bard.
- **race** is required and must be one of: human, elf, orc, beastman, dwarf, dryad, demon.
- **level** must be an integer between 1 and 100, by default its value is 1.
- 
**Response:**
```json
{
  "_id": "60a6f9bf7b1f4c10b8b78a56",
  "name": "Aragorn",
  "role": "warrior",
  "race": "human",
  "level": 50
}
```
### 4. Update Character
**Endpoint:** `PUT /characters/:id`

**Description:** Update an existing game character's informations.

**Path Parameters:**
- `id`: The unique identifier of the character.

**Request Body:**
```json
{
  "level": 15,
  "class": "rogue"
}
```

**Validation:**
- Unlike character creation, here none of the attributes are really required
- **name** should still not be empty
- **class** must be one of the classes previously mentionned
- same thing with **race**
- **level** must be an integer between 1 and 100 and by default its value is set to 1

**Response:**
```json
{
  "_id": "60a6f9bf7b1f4c10b8b78a56",
  "name": "Aragorn",
  "role": "rogue",
  "race": "human",
  "level": 15
}
```

### 5. Delete Character
**Endpoint:** `DELETE /characters/:id`

**Description:** Delete a game character.

**Path Parameters:**
- `id`: The unique identifier of the character.

**Response:**
Status: 204 No Content
