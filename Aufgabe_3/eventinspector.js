var Events;
(function (Events) {
    // Gruppenarbeit mit Asya, Tini, Lisa und mir !!! 
    window.addEventListener("load", handleLoad);
    // 1. Funktion, um mousemove, key up und click installieren.
    function handleLoad(_event) {
        //mousemove, click und und keyup installieren, erste Funktion handleLoad auf dem Tracetable 
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        // body im document finden und click und keyup listeners installieren 
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        //alle Divs im Dokument finden und auf jedes Div einen click und keyup installieren. Eventuell eine
        // For-Schleife nutzen, um alle Divs durchzugehen, und nicht einzeln auf jedes zugreifen ??? Weiß aber nicht
        // genau wie umzusetzen. 
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div0").addEventListener("keyup", logInfo);
        document.getElementById("div1").addEventListener("keyup", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
    }
    // MouseEvent, zweite Funktion im Tracetable. Event Target im Span und Koordinaten der Maus anzeigen. 
    //Durch Style auf CSS zugreifen
    function setInfoBox(_event) {
        var cord1 = _event.clientX;
        var cord2 = _event.clientY;
        var span = document.getElementById("span");
        var eventTarget = _event.target;
        span.innerHTML = "target:" + eventTarget + "<br>" + "x position:" + cord1 + "<br>" + "y position:" + cord2;
        span.style.left = cord1 + "px";
        span.style.top = cord2 + "px";
    }
    // Event, dritte Funktion im Tracetable für Browserkonsole, wenn im Browser Bild die divs geglickt werden. 
    function logInfo(_event) {
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Type Event: " + _event.type);
        console.log(_event);
    }
})(Events || (Events = {}));
//# sourceMappingURL=eventinspector.js.map