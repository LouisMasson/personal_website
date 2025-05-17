
import { Client } from '@notionhq/client';

if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
  throw new Error('Missing required environment variables NOTION_API_KEY or NOTION_DATABASE_ID');
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function addGuestBookEntry(name: string, message: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: DATABASE_ID! },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Message: { rich_text: [{ text: { content: message } }] },
        Date: { date: { start: new Date().toISOString() } },
      },
    });
    return response;
  } catch (error) {
    console.error('Error adding entry:', error);
    throw error;
  }
}

export async function getGuestBookEntries() {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID!,
      sorts: [{ property: 'Date', direction: 'descending' }],
    });
    return response.results;
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw error;
  }
}
