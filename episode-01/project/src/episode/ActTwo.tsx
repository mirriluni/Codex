import React from 'react';
import {Series,useVideoConfig} from 'remotion';
import {Shot} from './Shot';
export const ActTwo=()=>{const {fps}=useVideoConfig();return <Series>
      <Series.Sequence name="05 — 16 ДОМОВ. НЕ 17." durationInFrames={167} premountFor={fps}><Shot index={4} /></Series.Sequence>
      <Series.Sequence name="06 — НЕ ОТДАВАЙ МЕНЯ" durationInFrames={199} premountFor={fps}><Shot index={5} /></Series.Sequence>
      <Series.Sequence name="07 — СИРЕНА РАНЬШЕ СРОКА" durationInFrames={178} premountFor={fps}><Shot index={6} /></Series.Sequence>
      <Series.Sequence name="08 — ОНИ МЕНЯЮТ УЛИЦУ" durationInFrames={230} premountFor={fps}><Shot index={7} /></Series.Sequence>
</Series>;};
