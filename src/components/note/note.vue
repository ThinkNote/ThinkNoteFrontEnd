<template>
<div class="note">
    <NoteToolbar></NoteToolbar>
    <div class="note-content">
        <spine></spine>
        <div class="note-page-content">
            <canvas id="note-page-canvas" style="border:1px solid black" />
        </div>
    </div>
</div>
</template>

<script>
import pdfjsLib from 'pdfjs-dist'
import spine from './content/spine.vue'
import NoteToolbar from './toolbar/noteToolbar.vue'
import {
    setTimeout
} from 'timers';
export default {
    name: 'note',
    components: {
        spine,
        NoteToolbar
    },
    data() {
        return {
            CurrentPDF: null,
            CurrentPage: 1
        }
    },
    methods: {
        loadPDF: function (url) {
            url = "http://localhost:8080/static/TestPDF.pdf";
            pdfjsLib.GlobalWorkerOptions.workerSrc =
                '../../../node_modules/pdfjs-dist/build/pdf.worker.js';
            let loadingTask = pdfjsLib.getDocument(url);
            loadingTask.promise.then((pdf) => {
                this.CurrentPDF = pdf;
                this.getPage();
            });
        },
        getPage: function () {
            let _this = this; // I don't know what the lib author had done totally. There are a serious "this" env binding lost.
            _this.CurrentPDF.getPage(_this.CurrentPage).then((page) => {
                let scale = 1.5;
                let viewport = page.getViewport(scale);
                let canvas = document.getElementById('note-page-canvas');
                let context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                let renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext)
                setTimeout(() => {
                    context.font = "26px bold Arial"
                    context.textAlign = 'center';
                    context.fillStyle = "#000"
                    context.fillText("这是一张canvas，你喜欢在上面干什么都行", 400, 100);
                },200)
            })
        }
    },
    mounted: function () {
        console.log("正准备加载PDF", this.CurrentPDF)
        this.loadPDF()

    }
}
</script>

<style>
.note {
    height: 100vh;
    overflow: hidden;
}

.note-content {
    display: flex;
}
</style>
