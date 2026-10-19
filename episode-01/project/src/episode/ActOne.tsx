import React from 'react';
import {Series,useVideoConfig} from 'remotion';
import {Shot} from './Shot';
export const ActOne=()=>{const {fps}=useVideoConfig();return <Series>
      <Series.Sequence name="01 — НЕ ОТКРЫВАЙ ГЛАЗА" durationInFrames={85} premountFor={fps}><Shot index={0} /></Series.Sequence>
      <Series.Sequence name="02 — МАРК · КУРЬЕР" durationInFrames={182} premountFor={fps}><Shot index={1} /></Series.Sequence>
      <Series.Sequence name="03 — СМОТРЕТЬ ЗАПРЕЩЕНО" durationInFrames={181} premountFor={fps}><Shot index={2} /></Series.Sequence>
      <Series.Sequence name="04 — ДОМ 17" durationInFrames={226} premountFor={fps}><Shot index={3} /></Series.Sequence>
</Series>;};
