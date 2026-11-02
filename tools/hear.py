#!/usr/bin/env python3
"""يحوّل صوت مقطع الاستماع إلى نص، ليطابق المراجع أسئلة الدرس بما يُقال فعلًا لا بالنص المنشور وحده.

الاستعمال:
  pip install --break-system-packages faster-whisper
  python3 tools/hear.py <ملف الصوت أو رابطه> [ملف الناتج]

يطبع كل مقطع مع وقته، ولا يكتب شيئًا في الموقع. ولا يوضع ناتجه في المستودع، لأن نص المقاطع محفوظ الحقوق.
والأداة تخطئ في بعض الكلمات، ولا تحكم على وضوح الصوت ولا لهجته.
يحتاج ffmpeg، وتُنزَّل نسخة النموذج small.en من huggingface.co أول مرة.
"""
import subprocess
import sys

import numpy as np
from faster_whisper import WhisperModel


def load(source):
    """يحوّل الصوت إلى 16 كيلوهرتز بقناة واحدة عبر ffmpeg، فلا يعتمد على مكتبة PyAV."""
    raw = subprocess.run(
        ["ffmpeg", "-v", "error", "-i", source, "-ac", "1", "-ar", "16000", "-f", "s16le", "-"],
        capture_output=True, check=True,
    ).stdout
    return np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768.0


def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    audio = load(sys.argv[1])
    model = WhisperModel("small.en", device="cpu", compute_type="int8")
    segments, _ = model.transcribe(audio, language="en", beam_size=5, vad_filter=True)
    lines = ["[%d:%02d] %s" % (int(s.start) // 60, int(s.start) % 60, s.text.strip()) for s in segments]
    text = "\n".join(lines) + "\n"
    if len(sys.argv) > 2:
        with open(sys.argv[2], "w", encoding="utf8") as out:
            out.write(text)
    else:
        print(text, end="")


if __name__ == "__main__":
    main()
