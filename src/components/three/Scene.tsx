import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Architecture() {
 const rig = useRef<THREE.Group>(null);
 useFrame(() => { if (rig.current) rig.current.position.z = -Math.min(window.scrollY / Math.max(document.body.scrollHeight, 1), 0.68) * 5; });
 return <group ref={rig}>
  <mesh position={[0,-1.55,-3]} receiveShadow><boxGeometry args={[15,.25,18]}/><meshStandardMaterial color="#393936" roughness={.92}/></mesh>
  <mesh position={[0,2.2,-5]}><boxGeometry args={[14,.18,12]}/><meshStandardMaterial color="#333330" roughness={1}/></mesh>
  <mesh position={[-5.2,1,-4]}><boxGeometry args={[.35,5.3,13]}/><meshStandardMaterial color="#62615b" roughness={1}/></mesh>
  <mesh position={[5.2,1,-4]}><boxGeometry args={[.35,5.3,13]}/><meshStandardMaterial color="#565650" roughness={1}/></mesh>
  <mesh position={[0,1.05,-9]}><boxGeometry args={[10.7,5.2,.45]}/><meshStandardMaterial color="#77766e" roughness={1}/></mesh>
  <mesh position={[0,1.25,-8.7]}><boxGeometry args={[4.3,3.5,.4]}/><meshStandardMaterial color="#1a1a18" roughness={1}/></mesh>
  <mesh position={[-3.4,-.75,-2]}><boxGeometry args={[1.2,1.4,1.2]}/><meshStandardMaterial color="#7b786e" roughness={.85}/></mesh>
  <mesh position={[3.5,-.55,-5]}><boxGeometry args={[.9,1.8,.9]}/><meshStandardMaterial color="#888477" roughness={.8}/></mesh>
  <mesh position={[0,.1,-6.7]}><boxGeometry args={[1.8,.18,.85]}/><meshStandardMaterial color="#a19277" roughness={.55}/></mesh>
  <pointLight position={[0,1.5,-5]} intensity={14} color="#d8bc8b" distance={11}/>
 </group>;
}
function CameraRig(){const target=useRef(new THREE.Vector3());const {invalidate}=useThree();useEffect(()=>{const onScroll=()=>invalidate();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[invalidate]);useFrame(({camera})=>{const p=Math.min(window.scrollY/Math.max(document.body.scrollHeight-innerHeight,1),1);target.current.set(0,.2-p*.22,4.7-p*2.2);camera.position.lerp(target.current,.22);camera.lookAt(0,.15,-4);if(camera.position.distanceTo(target.current)>.01)invalidate()});return null}
function Visibility(){const {invalidate}=useThree();useEffect(()=>{const fn=()=>{if(document.visibilityState==='visible')invalidate()};document.addEventListener('visibilitychange',fn);return()=>document.removeEventListener('visibilitychange',fn)},[invalidate]);return null}
export default function Scene(){return <div className="scene" aria-hidden="true"><Canvas frameloop="demand" dpr={[1,1.5]} camera={{position:[0,.2,4.7],fov:42}} gl={{antialias:false,powerPreference:'low-power'}}><color attach="background" args={['#171715']}/><fog attach="fog" args={['#171715',8,23]}/><ambientLight intensity={1.3}/><directionalLight position={[-4,8,3]} intensity={2.4} color="#d5c7ac"/><Architecture/><CameraRig/><Visibility/></Canvas></div>}
