import asyncio, json, pathlib
import edge_tts

async def main():
    folder = pathlib.Path('episode-01/audio')
    folder.mkdir(parents=True, exist_ok=True)
    story = json.loads(pathlib.Path('episode-01/story.json').read_text())
    for scene in story:
        captions = []
        speech = edge_tts.Communicate(scene['text'], 'ru-RU-DmitryNeural', rate='+33%', pitch='+0Hz', boundary='WordBoundary')
        with (folder / (scene['id'] + '.mp3')).open('wb') as out:
            async for chunk in speech.stream():
                if chunk['type'] == 'audio':
                    out.write(chunk['data'])
                elif chunk['type'] == 'WordBoundary':
                    start = chunk['offset'] / 10000
                    end = start + chunk['duration'] / 10000
                    captions.append({'text': ' ' + chunk['text'], 'startMs': start, 'endMs': end, 'timestampMs': (start+end)/2, 'confidence': None})
        (folder / (scene['id'] + '.json')).write_text(json.dumps(captions, ensure_ascii=False, indent=2))

asyncio.run(main())
