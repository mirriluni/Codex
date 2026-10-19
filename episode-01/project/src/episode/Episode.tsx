import React from 'react';
import {AbsoluteFill,Series,Composition,Folder,useVideoConfig,staticFile} from 'remotion';
import {Audio} from '@remotion/media';
import {ActOne} from './ActOne';
import {ActTwo} from './ActTwo';
import {ActThree} from './ActThree';
import {ActFour} from './ActFour';
export const Episode=()=>{const {fps}=useVideoConfig();return <AbsoluteFill style={{background:'#080c10'}}><Audio src={staticFile('episode/score.wav')} volume={0.35} premountFor={fps}/><Series>
<Series.Sequence name="Посылка" durationInFrames={674} premountFor={fps}><ActOne/></Series.Sequence>
<Series.Sequence name="Сирена" durationInFrames={774} premountFor={fps}><ActTwo/></Series.Sequence>
<Series.Sequence name="Нарушение" durationInFrames={797} premountFor={fps}><ActThree/></Series.Sequence>
<Series.Sequence name="Звонок" durationInFrames={820} premountFor={fps}><ActFour/></Series.Sequence>
</Series></AbsoluteFill>;};
export const EpisodeRegistration=()=> <><Composition id="Episode01-Dom17" component={Episode} durationInFrames={3065} width={1080} height={1920} fps={30}/><Folder name="Episode-01"><Composition id="ActOne" component={ActOne} durationInFrames={674} width={1080} height={1920} fps={30}/><Composition id="ActTwo" component={ActTwo} durationInFrames={774} width={1080} height={1920} fps={30}/><Composition id="ActThree" component={ActThree} durationInFrames={797} width={1080} height={1920} fps={30}/><Composition id="ActFour" component={ActFour} durationInFrames={820} width={1080} height={1920} fps={30}/></Folder></>;
