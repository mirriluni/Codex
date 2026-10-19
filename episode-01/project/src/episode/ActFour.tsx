import React from 'react';
import {Series,useVideoConfig} from 'remotion';
import {Shot} from './Shot';
export const ActFour=()=>{const {fps}=useVideoConfig();return <Series>
      <Series.Sequence name="13 — ОНИ ЗНАЛИ МЕНЯ" durationInFrames={209} premountFor={fps}><Shot index={12} /></Series.Sequence>
      <Series.Sequence name="14 — СНИМОК ИЗ БУДУЩЕГО" durationInFrames={183} premountFor={fps}><Shot index={13} /></Series.Sequence>
      <Series.Sequence name="15 — МАМА" durationInFrames={204} premountFor={fps}><Shot index={14} /></Series.Sequence>
      <Series.Sequence name="16 — ОН УЖЕ ЗА ТОБОЙ" durationInFrames={224} premountFor={fps}><Shot index={15} /></Series.Sequence>
</Series>;};
