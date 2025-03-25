import { ElevenLabsClient, play } from 'elevenlabs';
const client = new ElevenLabsClient();
const audio = await client.textToSpeech.convert('JBFqnCBsd6RMkjVDRZzb', {
	text: 'Qamaria Yememi Coffee Company. At Qamaria, we harvest and package coffee beans from single farms so that you may enjoy it as the locals have for centuries.',
	model_id: 'eleven_multilingual_v2',
	output_format: 'mp3_44100_128',
});

await play(audio);
