export const doc = {
  "openapi": "3.0.0",
  "info": {
    "title": "Book Directory API",
    "version": "1.0.0",
    "description": "A simple CRUD API for managing books"
  },
  "servers": [
    {
      "url": "http://localhost:3000"
    }
  ],
  "paths": {
    "/allbook": {
      "get": {
        "summary": "Get all books",
        "responses": {
          "201": {
            "description": "List of all books",
            "content": {
              "application/json": {
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "bookList": {
                          "type": "array",
                          "items": { "$ref": "#/components/schemas/Book" }
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "bookList": {
                          "type": "string",
                          "example": "No avilable book"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      }
    },
    "/book/{id}": {
      "get": {
        "summary": "Get a single book by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": { "type": "integer" }
          }
        ],
        "responses": {
          "201": {
            "description": "Book found or not",
            "content": {
              "application/json": {
                "schema": {
                  "oneOf": [
                    {
                      "type": "object",
                      "properties": {
                        "bookList": {
                          "type": "array",
                          "items": { "$ref": "#/components/schemas/Book" }
                        }
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "bookList": {
                          "type": "string",
                          "example": "No book found"
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      },
      "put": {
        "summary": "Update a book by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": { "type": "integer" }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": { "$ref": "#/components/schemas/Book" }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Book updated",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "Msg": {
                      "type": "string",
                      "example": "Book updated"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "delete": {
        "summary": "Delete a book by ID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": { "type": "integer" }
          }
        ],
        "responses": {
          "201": {
            "description": "Book deleted",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "Msg": {
                      "type": "string",
                      "example": "Book deleted"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/book": {
      "post": {
        "summary": "Add a new book",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": { "$ref": "#/components/schemas/Book" }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Book added",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "Msg": {
                      "type": "string",
                      "example": "Book added"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Book": {
        "type": "object",
        "properties": {
          "id": { "type": "integer", "example": 1 },
          "title": { "type": "string", "example": "The Alchemist" },
          "author": { "type": "string", "example": "Paulo Coelho" },
          "genre": { "type": "string", "example": "Fiction" },
          "totalPage": { "type": "integer", "example": 208 }
        },
        "required": ["id", "title", "author", "genre", "totalPage"]
      }
    }
  }
}
