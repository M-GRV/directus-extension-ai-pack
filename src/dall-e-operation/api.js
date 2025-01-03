import { defineOperationApi } from '@directus/extensions-sdk';
import { OpenAI } from "openai";
import { openAIField } from '../configuration/fields';
import { getSetting } from '../lib/util';

export default defineOperationApi({
    id: 'dall-e-operation',
    handler: async (
        { text, api_key, amount=1, size='1024x1024', save_assets=true }, 
        { services, database, getSchema }
    ) => {
        const { FilesService, SettingsService } = services;
        const schema = await getSchema();
        const settings = new SettingsService({ schema, knex: database });
        const files = new FilesService({ schema, knex: database }); 

        const openai = new OpenAI({ 
            apiKey: await getSetting(settings, openAIField.field, api_key)
        });

        const response = await openai.images.generate({
            prompt: text,
            n: amount,
            size,
        });

        let result = [], ids = [];
        for (let i = 0; i < amount; i++) {
            const url = response.data[i].url;
            result.push(url);
            if (save_assets) {
                const id = await files.importOne(url);
                ids.push(id);
            }
        }

        return amount === 1
            ? { url: result[0], id: ids[0] ?? null }
            : { url: result, id: ids };
    },
});