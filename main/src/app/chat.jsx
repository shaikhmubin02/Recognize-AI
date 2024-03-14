"use client" 

import { useId, useEffect, useRef, useState } from "react";
import {useChat} from "ai/react"; 
import {useSilenceAwareRecorder} from 'silence-aware-recorder/react';
import {useMediaRecorder} from "@wmik/use-media-recorder";
import { mergeImages } from "merge";

//config
const INTERVAL = 250;
const IMAGE_WIDTH = 512;
const IMAGE_QUALITY = 0.6;
const COLUMNS = 4;
const MAX_SCREENSHOT = 60;
const SILENCE_DURATION = 2500;
const SILENT_THRESHOLD = -30;

export default function Chat() {

    const id = useId(); 
    const maxVolumeRef = useRef(0);
    const minvolumeRef = useRef(-100);
    const isBusy = useRef(false);
    const screenshotsRef = useRef([]);
    const [displayDebug, setDisplayDebug] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [phase, setPhase] = useState("not inited");
    const [transcription, setTranscription] = useState("");
    const [imagesGridUrl, setImagesGridUrl] = useState(null);
    const [currentVolume, setCurrentVolume] = useState(-50);
    const [volumePercentage, setVolumePercentage] = useState(0);

    

}