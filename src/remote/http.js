import { channels } from './db';

export const axios = {
	get: async (_url) => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve({
					data: channels,
					status: 200
				});
			}, 1500);
		});
	},
	post: (async (_url, { channel }) => {
		return new Promise(resolve => {
			setTimeout(() => {
				if (channels.find(c => c.id === channel.id)) {
					channels = channels.map(c => c.id === channel.id ? channel : c);
					resolve({ data: channel, status: 200 });
				}
				resolve({ data: null, status: 404 });
			}, 1500);
		});
	})
};