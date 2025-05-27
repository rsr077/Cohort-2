"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: 'postgresql://neondb_owner:npg_Be2Ul8GFgdfp@ep-icy-water-a8ps694m-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    ssl: {
        rejectUnauthorized: false,
    },
});
function saveUser(firstName, lastName, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.query(`DROP TABLE IF EXISTS users;`);
            // Create table
            yield client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        firstName TEXT,
        lastName TEXT,
        password TEXT,  -- ✅ FIXED: Use TEXT instead of NUMBER
        email TEXT UNIQUE NOT NULL
      );
    `);
            // Insert user with 4 values and 4 placeholders
            const insertQuery = 'INSERT INTO users (firstName, lastName, password, email) VALUES ($1, $2, $3, $4) RETURNING *';
            const result = yield client.query(insertQuery, [firstName, lastName, password, email]);
            console.log('✅ User saved:', result.rows[0]);
        }
        catch (err) {
            if (err instanceof Error) {
                console.error('❌ Error saving user:', err.message);
            }
            else {
                console.error('❌ Unknown error:', err);
            }
        }
        finally {
            yield client.end();
        }
    });
}
// Example call
saveUser('Raju', 'Riya', '343443434', 'rajeefdf656@example.com');
