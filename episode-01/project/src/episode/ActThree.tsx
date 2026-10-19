import React from 'react';
import {Series,useVideoConfig} from 'remotion';
import {Shot} from './Shot';
export const ActThree=()=>{const {fps}=useVideoConfig();return <Series>
      <Series.Sequence name="09 — ОДНА СЕКУНДА" durationInFrames={216} premountFor={fps}><Shot index={8} /></Series.Sequence>
      <Series.Sequence name="10 — ДОМ ПОЯВИЛСЯ" durationInFrames={190} premountFor={fps}><Shot index={9} /></Series.Sequence>
      <Series.Sequence name="11 — НИ У ОДНОГО" durationInFrames={188} premountFor={fps}><Shot index={10} /></Series.Sequence>
      <Series.Sequence name="12 — ВИДИШЬ? ВХОДИ." durationInFrames={203} premountFor={fps}><Shot index={11} /></Series.Sequence>
</Series>;};
