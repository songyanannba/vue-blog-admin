<template>
    <i v-if="isfull" @click="requestFullScreen" class="fa fa-arrows-alt"></i>
    <i v-else @click="requestFullScreen" class="fa fa-arrows-alt"></i>

    <!-- <i v-else @click="requestFullScreen" class="fa fa-arrows-alt"></i> -->
</template>

<script setup>
import {ref} from "vue"
const isfull = ref(false)

function isFullScreen() {
    return document.fullscreenElement == null
}

function requestFullScreen() {
    console.log("requestFullScreen")

    let element = document.documentElement


    isfull.value = !isfull.value

    let isFull = isFullScreen() 
    if  (!isFull) {
        exitFull()
        return
    } 

    var requestMethod = element.requestFullScreen ||
        element.webkitRequestFullScreen ||
        element.mozRequestFullScreen ||
        element.msRequestFullScreen;
    if (requestMethod) {
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
};


function exitFull() {
    var exitMethod = document.exitFullscreen ||
        document.mozCancelFullScreen ||
        document.webkitExitFullscreen ||
        document.webkitExitFullscreen;
    if (exitMethod) {
        exitMethod.call(document);
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
};

</script>