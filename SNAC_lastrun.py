#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.4),
    on May 01, 2026, at 15:00
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '0'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.4'
expName = 'SNAC'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'Please keep this number!': f"{randint(0, 999):03.0f}",
    'What letter were you given?': ['','o','p','q','r','s','t','u','v','w','x','y','z'],
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1440, 900]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = 'data/raw_%s' % (expInfo['Please keep this number!'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\ebutn\\Downloads\\SNAC\\SNAC_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=True, allowStencil=False,
            monitor='testMonitor', color=[1,1,1], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='pix',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [1,1,1]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'pix'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Loading, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    if deviceManager.getDevice('key_resp_3') is None:
        # initialise key_resp_3
        key_resp_3 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_3',
        )
    if deviceManager.getDevice('key_resp') is None:
        # initialise key_resp
        key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp',
        )
    if deviceManager.getDevice('key_resp_2') is None:
        # initialise key_resp_2
        key_resp_2 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_2',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "start_p" ---
    text_15 = visual.TextStim(win=win, name='text_15',
        text='Click the spacebar to start the practice trial.',
        font='Arial',
        units='norm', pos=(0, 0), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_3 = keyboard.Keyboard(deviceName='key_resp_3')
    
    # --- Initialize components for Routine "p_equation" ---
    text_9 = visual.TextStim(win=win, name='text_9',
        text='16 + 27',
        font='Arial',
        units='norm', pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "p_image" ---
    image_6 = visual.ImageStim(
        win=win,
        name='image_6', units='norm', 
        image='Beach 2.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(1.8, 1.8),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    
    # --- Initialize components for Routine "p_math_answer" ---
    text_10 = visual.TextStim(win=win, name='text_10',
        text='Please answer the addition problem.',
        font='Arial',
        units='norm', pos=(0, .18), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    p_a = visual.TextStim(win=win, name='p_a',
        text='48',
        font='Arial',
        units='norm', pos=(-.2, -0.075), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    p_b = visual.TextStim(win=win, name='p_b',
        text='43',
        font='Arial',
        units='norm', pos=(.2, -.075), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-2.0);
    mouse = event.Mouse(win=win)
    x, y = [None, None]
    mouse.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "p_time_start" ---
    text_11 = visual.TextStim(win=win, name='text_11',
        text='Click the hourglass to start the timer',
        font='Arial',
        units='norm', pos=(0, .18), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    polygon = visual.ShapeStim(
        win=win, name='polygon',units='height', 
        size=(0.15, 0.15), vertices='triangle',
        ori=0.0, pos=(0, -0.07), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='gray', fillColor='gray',
        opacity=1.0, depth=-1.0, interpolate=True)
    polygon_2 = visual.ShapeStim(
        win=win, name='polygon_2',units='height', 
        size=(0.15, 0.15), vertices='triangle',
        ori=180.0, pos=(0, -0.05), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='gray', fillColor='gray',
        opacity=None, depth=-2.0, interpolate=True)
    mouse_2 = event.Mouse(win=win)
    x, y = [None, None]
    mouse_2.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "p_time_end" ---
    text_12 = visual.TextStim(win=win, name='text_12',
        text='Click the hourglass to stop the timer',
        font='Arial',
        units='norm', pos=(0, 0.18), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    polygon_3 = visual.ShapeStim(
        win=win, name='polygon_3',units='height', 
        size=(0.15, 0.15), vertices='triangle',
        ori=0.0, pos=(0, -0.07), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor=None, fillColor='black',
        opacity=None, depth=-1.0, interpolate=True)
    polygon_4 = visual.ShapeStim(
        win=win, name='polygon_4',units='height', 
        size=(0.15, 0.15), vertices='triangle',
        ori=180.0, pos=(0, -0.05), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor=None, fillColor='black',
        opacity=None, depth=-2.0, interpolate=True)
    mouse_3 = event.Mouse(win=win)
    x, y = [None, None]
    mouse_3.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "p_vastness" ---
    vast_Q = visual.TextStim(win=win, name='vast_Q',
        text='How vast was the image?',
        font='Arial',
        units='norm', pos=(0, 0.2), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    slider = visual.Slider(win=win, name='slider',
        startValue=50, size=(1.0, 0.1), pos=(0, 0), units='height',
        labels=[0, 100], ticks=(0, 100), granularity=0.0,
        style='scrollbar', styleTweaks=('triangleMarker',), opacity=1.0,
        labelColor='LightGray', markerColor='Red', lineColor='DarkGray', colorSpace='rgb',
        font='Open Sans', labelHeight=0.035,
        flip=False, ori=0.0, depth=-1, readOnly=False)
    mouse_4 = event.Mouse(win=win)
    x, y = [None, None]
    mouse_4.mouseClock = core.Clock()
    define_vast = visual.TextStim(win=win, name='define_vast',
        text='Vastness: a perceptual phenomenon that occurs when a space seems to extend to very far distances, seemingly without limit.',
        font='Arial',
        units='norm', pos=(0, 0.4), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='gray', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-3.0);
    Submit_score_button = visual.Rect(
        win=win, name='Submit_score_button',units='norm', 
        width=(0.4, 0.1)[0], height=(0.4, 0.1)[1],
        ori=0.0, pos=(0, -0.3), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='#b9b9b9',
        opacity=None, depth=-4.0, interpolate=True)
    Submit_score = visual.TextStim(win=win, name='Submit_score',
        text='Submit Score',
        font='Arial',
        units='norm', pos=(0, -0.3), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    
    # --- Initialize components for Routine "start_e" ---
    text = visual.TextStim(win=win, name='text',
        text='Press the spacebar to start the next trial.',
        font='Arial',
        units='norm', pos=(0, 0), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    key_resp = keyboard.Keyboard(deviceName='key_resp')
    
    # --- Initialize components for Routine "equations" ---
    math_equation = visual.TextStim(win=win, name='math_equation',
        text='',
        font='Arial',
        units='norm', pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "Image" ---
    image = visual.ImageStim(
        win=win,
        name='image', units='norm', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(1.8, 1.8),
        color=[1,1,1], colorSpace='rgb', opacity=1.0,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    
    # --- Initialize components for Routine "math_answer" ---
    answers = visual.TextStim(win=win, name='answers',
        text='Please answer the addition problem',
        font='Arial',
        units='norm', pos=(0, 0.18), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    answer_a = visual.TextStim(win=win, name='answer_a',
        text='',
        font='Arial',
        units='norm', pos=(-0.2, -0.075), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    answer_b = visual.TextStim(win=win, name='answer_b',
        text='',
        font='Arial',
        units='norm', pos=(0.2, -0.075), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-2.0);
    answer_end = event.Mouse(win=win)
    x, y = [None, None]
    answer_end.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "time_start" ---
    start_time = visual.TextStim(win=win, name='start_time',
        text='Click the hourglass to start the timer',
        font='Arial',
        units='norm', pos=(0, .18), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    hg_start_bottom = visual.ShapeStim(
        win=win, name='hg_start_bottom',units='height', 
        size=(0.15, 0.15), vertices='triangle',
        ori=0.0, pos=(0, -0.07), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='gray', fillColor='gray',
        opacity=1.0, depth=-1.0, interpolate=True)
    hg_start_top = visual.ShapeStim(
        win=win, name='hg_start_top',units='height', 
        size=(0.15, 0.15), vertices='triangle',
        ori=180.0, pos=(0, -0.05), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='gray', fillColor='gray',
        opacity=1.0, depth=-2.0, interpolate=True)
    start_time_mouse = event.Mouse(win=win)
    x, y = [None, None]
    start_time_mouse.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "time_end" ---
    end_time = visual.TextStim(win=win, name='end_time',
        text='Click the hourglass to stop the timer',
        font='Arial',
        units='norm', pos=(0, .18), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    hg_end_bottom = visual.ShapeStim(
        win=win, name='hg_end_bottom',units='height', 
        size=(0.15, 0.15), vertices='triangle',
        ori=0.0, pos=(0, -0.07), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='black',
        opacity=1.0, depth=-1.0, interpolate=True)
    hg_end_top = visual.ShapeStim(
        win=win, name='hg_end_top',units='height', 
        size=(0.15, 0.15), vertices='triangle',
        ori=180.0, pos=(0, -0.05), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='black',
        opacity=1.0, depth=-2.0, interpolate=True)
    end_time_mouse = event.Mouse(win=win)
    x, y = [None, None]
    end_time_mouse.mouseClock = core.Clock()
    
    # --- Initialize components for Routine "vastness" ---
    vast_Q_2 = visual.TextStim(win=win, name='vast_Q_2',
        text='How vast was the image?',
        font='Arial',
        units='norm', pos=(0, 0.2), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    slider_2 = visual.Slider(win=win, name='slider_2',
        startValue=50, size=(1.0, 0.1), pos=(0, 0), units='height',
        labels=[0, 100], ticks=(0, 100), granularity=0.0,
        style='scrollbar', styleTweaks=('triangleMarker',), opacity=1.0,
        labelColor='LightGray', markerColor='Red', lineColor='DarkGray', colorSpace='rgb',
        font='Open Sans', labelHeight=0.035,
        flip=False, ori=0.0, depth=-1, readOnly=False)
    mouse_6 = event.Mouse(win=win)
    x, y = [None, None]
    mouse_6.mouseClock = core.Clock()
    define_vast_2 = visual.TextStim(win=win, name='define_vast_2',
        text='Vastness: a perceptual phenomenon that occurs when a space seems to extend to very far distances, seemingly without limit.',
        font='Arial',
        units='norm', pos=(0, 0.4), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='gray', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-3.0);
    Submit_score_button_2 = visual.Rect(
        win=win, name='Submit_score_button_2',units='norm', 
        width=(0.4, 0.1)[0], height=(0.4, 0.1)[1],
        ori=0.0, pos=(0, -0.3), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='black', fillColor='#b9b9b9',
        opacity=None, depth=-4.0, interpolate=True)
    Submit_score_2 = visual.TextStim(win=win, name='Submit_score_2',
        text='Submit Score',
        font='Arial',
        units='norm', pos=(0, -0.3), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-5.0);
    
    # --- Initialize components for Routine "catch" ---
    text_3 = visual.TextStim(win=win, name='text_3',
        text=None,
        font='Arial',
        units='norm', pos=(0, 0), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_2 = keyboard.Keyboard(deviceName='key_resp_2')
    
    # --- Initialize components for Routine "end" ---
    text_2 = visual.TextStim(win=win, name='text_2',
        text='Please remember this number, you will need to enter it on the next page:',
        font='Arial',
        units='norm', pos=(0, 0.2), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=0.0);
    text_6 = visual.TextStim(win=win, name='text_6',
        text=expInfo['Please keep this number!'],
        font='Arial',
        units='norm', pos=(0, 0), draggable=False, height=0.2, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-1.0);
    text_7 = visual.TextStim(win=win, name='text_7',
        text="Press 'esc' twice whem you are done viewing the number",
        font='Arial',
        units='norm', pos=(0, -0.2), draggable=False, height=0.08, wrapWidth=None, ori=0.0, 
        color='black', colorSpace='rgb', opacity=1.0, 
        languageStyle='LTR',
        depth=-3.0);
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "start_p" ---
    # create an object to store info about Routine start_p
    start_p = data.Routine(
        name='start_p',
        components=[text_15, key_resp_3],
    )
    start_p.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_resp_3
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # store start times for start_p
    start_p.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    start_p.tStart = globalClock.getTime(format='float')
    start_p.status = STARTED
    thisExp.addData('start_p.started', start_p.tStart)
    start_p.maxDuration = None
    # keep track of which components have finished
    start_pComponents = start_p.components
    for thisComponent in start_p.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "start_p" ---
    start_p.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_15* updates
        
        # if text_15 is starting this frame...
        if text_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_15.frameNStart = frameN  # exact frame index
            text_15.tStart = t  # local t and not account for scr refresh
            text_15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_15, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_15.started')
            # update status
            text_15.status = STARTED
            text_15.setAutoDraw(True)
        
        # if text_15 is active this frame...
        if text_15.status == STARTED:
            # update params
            pass
        
        # *key_resp_3* updates
        waitOnFlip = False
        
        # if key_resp_3 is starting this frame...
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_3.started')
            # update status
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                key_resp_3.duration = _key_resp_3_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            start_p.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in start_p.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "start_p" ---
    for thisComponent in start_p.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for start_p
    start_p.tStop = globalClock.getTime(format='float')
    start_p.tStopRefresh = tThisFlipGlobal
    thisExp.addData('start_p.stopped', start_p.tStop)
    # check responses
    if key_resp_3.keys in ['', [], None]:  # No response was made
        key_resp_3.keys = None
    thisExp.addData('key_resp_3.keys',key_resp_3.keys)
    if key_resp_3.keys != None:  # we had a response
        thisExp.addData('key_resp_3.rt', key_resp_3.rt)
        thisExp.addData('key_resp_3.duration', key_resp_3.duration)
    thisExp.nextEntry()
    # the Routine "start_p" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "p_equation" ---
    # create an object to store info about Routine p_equation
    p_equation = data.Routine(
        name='p_equation',
        components=[text_9],
    )
    p_equation.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for p_equation
    p_equation.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    p_equation.tStart = globalClock.getTime(format='float')
    p_equation.status = STARTED
    thisExp.addData('p_equation.started', p_equation.tStart)
    p_equation.maxDuration = None
    # keep track of which components have finished
    p_equationComponents = p_equation.components
    for thisComponent in p_equation.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "p_equation" ---
    p_equation.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 3.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_9* updates
        
        # if text_9 is starting this frame...
        if text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_9.frameNStart = frameN  # exact frame index
            text_9.tStart = t  # local t and not account for scr refresh
            text_9.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_9, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_9.status = STARTED
            text_9.setAutoDraw(True)
        
        # if text_9 is active this frame...
        if text_9.status == STARTED:
            # update params
            pass
        
        # if text_9 is stopping this frame...
        if text_9.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_9.tStartRefresh + 3.0-frameTolerance:
                # keep track of stop time/frame for later
                text_9.tStop = t  # not accounting for scr refresh
                text_9.tStopRefresh = tThisFlipGlobal  # on global time
                text_9.frameNStop = frameN  # exact frame index
                # update status
                text_9.status = FINISHED
                text_9.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            p_equation.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in p_equation.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "p_equation" ---
    for thisComponent in p_equation.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for p_equation
    p_equation.tStop = globalClock.getTime(format='float')
    p_equation.tStopRefresh = tThisFlipGlobal
    thisExp.addData('p_equation.stopped', p_equation.tStop)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if p_equation.maxDurationReached:
        routineTimer.addTime(-p_equation.maxDuration)
    elif p_equation.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-3.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "p_image" ---
    # create an object to store info about Routine p_image
    p_image = data.Routine(
        name='p_image',
        components=[image_6],
    )
    p_image.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for p_image
    p_image.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    p_image.tStart = globalClock.getTime(format='float')
    p_image.status = STARTED
    thisExp.addData('p_image.started', p_image.tStart)
    p_image.maxDuration = None
    # keep track of which components have finished
    p_imageComponents = p_image.components
    for thisComponent in p_image.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "p_image" ---
    p_image.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 4.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *image_6* updates
        
        # if image_6 is starting this frame...
        if image_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            image_6.frameNStart = frameN  # exact frame index
            image_6.tStart = t  # local t and not account for scr refresh
            image_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(image_6, 'tStartRefresh')  # time at next scr refresh
            # update status
            image_6.status = STARTED
            image_6.setAutoDraw(True)
        
        # if image_6 is active this frame...
        if image_6.status == STARTED:
            # update params
            pass
        
        # if image_6 is stopping this frame...
        if image_6.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > image_6.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                image_6.tStop = t  # not accounting for scr refresh
                image_6.tStopRefresh = tThisFlipGlobal  # on global time
                image_6.frameNStop = frameN  # exact frame index
                # update status
                image_6.status = FINISHED
                image_6.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            p_image.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in p_image.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "p_image" ---
    for thisComponent in p_image.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for p_image
    p_image.tStop = globalClock.getTime(format='float')
    p_image.tStopRefresh = tThisFlipGlobal
    thisExp.addData('p_image.stopped', p_image.tStop)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if p_image.maxDurationReached:
        routineTimer.addTime(-p_image.maxDuration)
    elif p_image.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-4.000000)
    thisExp.nextEntry()
    
    # --- Prepare to start Routine "p_math_answer" ---
    # create an object to store info about Routine p_math_answer
    p_math_answer = data.Routine(
        name='p_math_answer',
        components=[text_10, p_a, p_b, mouse],
    )
    p_math_answer.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse
    mouse.x = []
    mouse.y = []
    mouse.leftButton = []
    mouse.midButton = []
    mouse.rightButton = []
    mouse.time = []
    mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for p_math_answer
    p_math_answer.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    p_math_answer.tStart = globalClock.getTime(format='float')
    p_math_answer.status = STARTED
    thisExp.addData('p_math_answer.started', p_math_answer.tStart)
    p_math_answer.maxDuration = None
    # keep track of which components have finished
    p_math_answerComponents = p_math_answer.components
    for thisComponent in p_math_answer.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "p_math_answer" ---
    p_math_answer.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_10* updates
        
        # if text_10 is starting this frame...
        if text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_10.frameNStart = frameN  # exact frame index
            text_10.tStart = t  # local t and not account for scr refresh
            text_10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_10, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_10.status = STARTED
            text_10.setAutoDraw(True)
        
        # if text_10 is active this frame...
        if text_10.status == STARTED:
            # update params
            pass
        
        # *p_a* updates
        
        # if p_a is starting this frame...
        if p_a.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p_a.frameNStart = frameN  # exact frame index
            p_a.tStart = t  # local t and not account for scr refresh
            p_a.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p_a, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p_a.started')
            # update status
            p_a.status = STARTED
            p_a.setAutoDraw(True)
        
        # if p_a is active this frame...
        if p_a.status == STARTED:
            # update params
            pass
        
        # *p_b* updates
        
        # if p_b is starting this frame...
        if p_b.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            p_b.frameNStart = frameN  # exact frame index
            p_b.tStart = t  # local t and not account for scr refresh
            p_b.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(p_b, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'p_b.started')
            # update status
            p_b.status = STARTED
            p_b.setAutoDraw(True)
        
        # if p_b is active this frame...
        if p_b.status == STARTED:
            # update params
            pass
        # *mouse* updates
        
        # if mouse is starting this frame...
        if mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse.started', t)
            # update status
            mouse.status = STARTED
            mouse.mouseClock.reset()
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames([p_a, p_b], namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(mouse):
                            gotValidClick = True
                            mouse.clicked_name.append(obj.name)
                    if not gotValidClick:
                        mouse.clicked_name.append(None)
                    x, y = mouse.getPos()
                    mouse.x.append(x)
                    mouse.y.append(y)
                    buttons = mouse.getPressed()
                    mouse.leftButton.append(buttons[0])
                    mouse.midButton.append(buttons[1])
                    mouse.rightButton.append(buttons[2])
                    mouse.time.append(mouse.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            p_math_answer.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in p_math_answer.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "p_math_answer" ---
    for thisComponent in p_math_answer.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for p_math_answer
    p_math_answer.tStop = globalClock.getTime(format='float')
    p_math_answer.tStopRefresh = tThisFlipGlobal
    thisExp.addData('p_math_answer.stopped', p_math_answer.tStop)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('mouse.x', mouse.x)
    thisExp.addData('mouse.y', mouse.y)
    thisExp.addData('mouse.leftButton', mouse.leftButton)
    thisExp.addData('mouse.midButton', mouse.midButton)
    thisExp.addData('mouse.rightButton', mouse.rightButton)
    thisExp.addData('mouse.time', mouse.time)
    thisExp.addData('mouse.clicked_name', mouse.clicked_name)
    thisExp.nextEntry()
    # the Routine "p_math_answer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "p_time_start" ---
    # create an object to store info about Routine p_time_start
    p_time_start = data.Routine(
        name='p_time_start',
        components=[text_11, polygon, polygon_2, mouse_2],
    )
    p_time_start.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_2
    mouse_2.x = []
    mouse_2.y = []
    mouse_2.leftButton = []
    mouse_2.midButton = []
    mouse_2.rightButton = []
    mouse_2.time = []
    mouse_2.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for p_time_start
    p_time_start.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    p_time_start.tStart = globalClock.getTime(format='float')
    p_time_start.status = STARTED
    thisExp.addData('p_time_start.started', p_time_start.tStart)
    p_time_start.maxDuration = None
    # keep track of which components have finished
    p_time_startComponents = p_time_start.components
    for thisComponent in p_time_start.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "p_time_start" ---
    p_time_start.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_11* updates
        
        # if text_11 is starting this frame...
        if text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_11.frameNStart = frameN  # exact frame index
            text_11.tStart = t  # local t and not account for scr refresh
            text_11.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_11, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_11.started')
            # update status
            text_11.status = STARTED
            text_11.setAutoDraw(True)
        
        # if text_11 is active this frame...
        if text_11.status == STARTED:
            # update params
            pass
        
        # *polygon* updates
        
        # if polygon is starting this frame...
        if polygon.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon.frameNStart = frameN  # exact frame index
            polygon.tStart = t  # local t and not account for scr refresh
            polygon.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon.started')
            # update status
            polygon.status = STARTED
            polygon.setAutoDraw(True)
        
        # if polygon is active this frame...
        if polygon.status == STARTED:
            # update params
            pass
        
        # *polygon_2* updates
        
        # if polygon_2 is starting this frame...
        if polygon_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_2.frameNStart = frameN  # exact frame index
            polygon_2.tStart = t  # local t and not account for scr refresh
            polygon_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_2.started')
            # update status
            polygon_2.status = STARTED
            polygon_2.setAutoDraw(True)
        
        # if polygon_2 is active this frame...
        if polygon_2.status == STARTED:
            # update params
            pass
        # *mouse_2* updates
        
        # if mouse_2 is starting this frame...
        if mouse_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_2.frameNStart = frameN  # exact frame index
            mouse_2.tStart = t  # local t and not account for scr refresh
            mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_2.started', t)
            # update status
            mouse_2.status = STARTED
            mouse_2.mouseClock.reset()
            prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
        if mouse_2.status == STARTED:  # only update if started and not finished!
            buttons = mouse_2.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames([polygon, polygon_2], namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(mouse_2):
                            gotValidClick = True
                            mouse_2.clicked_name.append(obj.name)
                    if not gotValidClick:
                        mouse_2.clicked_name.append(None)
                    x, y = mouse_2.getPos()
                    mouse_2.x.append(x)
                    mouse_2.y.append(y)
                    buttons = mouse_2.getPressed()
                    mouse_2.leftButton.append(buttons[0])
                    mouse_2.midButton.append(buttons[1])
                    mouse_2.rightButton.append(buttons[2])
                    mouse_2.time.append(mouse_2.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            p_time_start.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in p_time_start.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "p_time_start" ---
    for thisComponent in p_time_start.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for p_time_start
    p_time_start.tStop = globalClock.getTime(format='float')
    p_time_start.tStopRefresh = tThisFlipGlobal
    thisExp.addData('p_time_start.stopped', p_time_start.tStop)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('mouse_2.x', mouse_2.x)
    thisExp.addData('mouse_2.y', mouse_2.y)
    thisExp.addData('mouse_2.leftButton', mouse_2.leftButton)
    thisExp.addData('mouse_2.midButton', mouse_2.midButton)
    thisExp.addData('mouse_2.rightButton', mouse_2.rightButton)
    thisExp.addData('mouse_2.time', mouse_2.time)
    thisExp.addData('mouse_2.clicked_name', mouse_2.clicked_name)
    thisExp.nextEntry()
    # the Routine "p_time_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "p_time_end" ---
    # create an object to store info about Routine p_time_end
    p_time_end = data.Routine(
        name='p_time_end',
        components=[text_12, polygon_3, polygon_4, mouse_3],
    )
    p_time_end.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_3
    mouse_3.x = []
    mouse_3.y = []
    mouse_3.leftButton = []
    mouse_3.midButton = []
    mouse_3.rightButton = []
    mouse_3.time = []
    mouse_3.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for p_time_end
    p_time_end.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    p_time_end.tStart = globalClock.getTime(format='float')
    p_time_end.status = STARTED
    thisExp.addData('p_time_end.started', p_time_end.tStart)
    p_time_end.maxDuration = None
    # keep track of which components have finished
    p_time_endComponents = p_time_end.components
    for thisComponent in p_time_end.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "p_time_end" ---
    p_time_end.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_12* updates
        
        # if text_12 is starting this frame...
        if text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_12.frameNStart = frameN  # exact frame index
            text_12.tStart = t  # local t and not account for scr refresh
            text_12.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_12, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_12.started')
            # update status
            text_12.status = STARTED
            text_12.setAutoDraw(True)
        
        # if text_12 is active this frame...
        if text_12.status == STARTED:
            # update params
            pass
        
        # *polygon_3* updates
        
        # if polygon_3 is starting this frame...
        if polygon_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_3.frameNStart = frameN  # exact frame index
            polygon_3.tStart = t  # local t and not account for scr refresh
            polygon_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_3.started')
            # update status
            polygon_3.status = STARTED
            polygon_3.setAutoDraw(True)
        
        # if polygon_3 is active this frame...
        if polygon_3.status == STARTED:
            # update params
            pass
        
        # *polygon_4* updates
        
        # if polygon_4 is starting this frame...
        if polygon_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            polygon_4.frameNStart = frameN  # exact frame index
            polygon_4.tStart = t  # local t and not account for scr refresh
            polygon_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(polygon_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'polygon_4.started')
            # update status
            polygon_4.status = STARTED
            polygon_4.setAutoDraw(True)
        
        # if polygon_4 is active this frame...
        if polygon_4.status == STARTED:
            # update params
            pass
        # *mouse_3* updates
        
        # if mouse_3 is starting this frame...
        if mouse_3.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_3.frameNStart = frameN  # exact frame index
            mouse_3.tStart = t  # local t and not account for scr refresh
            mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_3.started', t)
            # update status
            mouse_3.status = STARTED
            mouse_3.mouseClock.reset()
            prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
        if mouse_3.status == STARTED:  # only update if started and not finished!
            buttons = mouse_3.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames([polygon_3, polygon_4], namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(mouse_3):
                            gotValidClick = True
                            mouse_3.clicked_name.append(obj.name)
                    if not gotValidClick:
                        mouse_3.clicked_name.append(None)
                    x, y = mouse_3.getPos()
                    mouse_3.x.append(x)
                    mouse_3.y.append(y)
                    buttons = mouse_3.getPressed()
                    mouse_3.leftButton.append(buttons[0])
                    mouse_3.midButton.append(buttons[1])
                    mouse_3.rightButton.append(buttons[2])
                    mouse_3.time.append(mouse_3.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            p_time_end.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in p_time_end.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "p_time_end" ---
    for thisComponent in p_time_end.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for p_time_end
    p_time_end.tStop = globalClock.getTime(format='float')
    p_time_end.tStopRefresh = tThisFlipGlobal
    thisExp.addData('p_time_end.stopped', p_time_end.tStop)
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('mouse_3.x', mouse_3.x)
    thisExp.addData('mouse_3.y', mouse_3.y)
    thisExp.addData('mouse_3.leftButton', mouse_3.leftButton)
    thisExp.addData('mouse_3.midButton', mouse_3.midButton)
    thisExp.addData('mouse_3.rightButton', mouse_3.rightButton)
    thisExp.addData('mouse_3.time', mouse_3.time)
    thisExp.addData('mouse_3.clicked_name', mouse_3.clicked_name)
    thisExp.nextEntry()
    # the Routine "p_time_end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "p_vastness" ---
    # create an object to store info about Routine p_vastness
    p_vastness = data.Routine(
        name='p_vastness',
        components=[vast_Q, slider, mouse_4, define_vast, Submit_score_button, Submit_score],
    )
    p_vastness.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    slider.reset()
    # setup some python lists for storing info about the mouse_4
    mouse_4.x = []
    mouse_4.y = []
    mouse_4.leftButton = []
    mouse_4.midButton = []
    mouse_4.rightButton = []
    mouse_4.time = []
    mouse_4.clicked_name = []
    gotValidClick = False  # until a click is received
    # store start times for p_vastness
    p_vastness.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    p_vastness.tStart = globalClock.getTime(format='float')
    p_vastness.status = STARTED
    thisExp.addData('p_vastness.started', p_vastness.tStart)
    p_vastness.maxDuration = None
    # keep track of which components have finished
    p_vastnessComponents = p_vastness.components
    for thisComponent in p_vastness.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "p_vastness" ---
    p_vastness.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *vast_Q* updates
        
        # if vast_Q is starting this frame...
        if vast_Q.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            vast_Q.frameNStart = frameN  # exact frame index
            vast_Q.tStart = t  # local t and not account for scr refresh
            vast_Q.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(vast_Q, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'vast_Q.started')
            # update status
            vast_Q.status = STARTED
            vast_Q.setAutoDraw(True)
        
        # if vast_Q is active this frame...
        if vast_Q.status == STARTED:
            # update params
            pass
        
        # *slider* updates
        
        # if slider is starting this frame...
        if slider.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider.frameNStart = frameN  # exact frame index
            slider.tStart = t  # local t and not account for scr refresh
            slider.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'slider.started')
            # update status
            slider.status = STARTED
            slider.setAutoDraw(True)
        
        # if slider is active this frame...
        if slider.status == STARTED:
            # update params
            pass
        # *mouse_4* updates
        
        # if mouse_4 is starting this frame...
        if mouse_4.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mouse_4.frameNStart = frameN  # exact frame index
            mouse_4.tStart = t  # local t and not account for scr refresh
            mouse_4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_4, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.addData('mouse_4.started', t)
            # update status
            mouse_4.status = STARTED
            mouse_4.mouseClock.reset()
            prevButtonState = mouse_4.getPressed()  # if button is down already this ISN'T a new click
        if mouse_4.status == STARTED:  # only update if started and not finished!
            buttons = mouse_4.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    clickableList = environmenttools.getFromNames([Submit_score, Submit_score_button], namespace=locals())
                    for obj in clickableList:
                        # is this object clicked on?
                        if obj.contains(mouse_4):
                            gotValidClick = True
                            mouse_4.clicked_name.append(obj.name)
                    if not gotValidClick:
                        mouse_4.clicked_name.append(None)
                    x, y = mouse_4.getPos()
                    mouse_4.x.append(x)
                    mouse_4.y.append(y)
                    buttons = mouse_4.getPressed()
                    mouse_4.leftButton.append(buttons[0])
                    mouse_4.midButton.append(buttons[1])
                    mouse_4.rightButton.append(buttons[2])
                    mouse_4.time.append(mouse_4.mouseClock.getTime())
                    if gotValidClick:
                        continueRoutine = False  # end routine on response
        
        # *define_vast* updates
        
        # if define_vast is starting this frame...
        if define_vast.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            define_vast.frameNStart = frameN  # exact frame index
            define_vast.tStart = t  # local t and not account for scr refresh
            define_vast.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(define_vast, 'tStartRefresh')  # time at next scr refresh
            # update status
            define_vast.status = STARTED
            define_vast.setAutoDraw(True)
        
        # if define_vast is active this frame...
        if define_vast.status == STARTED:
            # update params
            pass
        
        # *Submit_score_button* updates
        
        # if Submit_score_button is starting this frame...
        if Submit_score_button.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Submit_score_button.frameNStart = frameN  # exact frame index
            Submit_score_button.tStart = t  # local t and not account for scr refresh
            Submit_score_button.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Submit_score_button, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Submit_score_button.started')
            # update status
            Submit_score_button.status = STARTED
            Submit_score_button.setAutoDraw(True)
        
        # if Submit_score_button is active this frame...
        if Submit_score_button.status == STARTED:
            # update params
            pass
        
        # *Submit_score* updates
        
        # if Submit_score is starting this frame...
        if Submit_score.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Submit_score.frameNStart = frameN  # exact frame index
            Submit_score.tStart = t  # local t and not account for scr refresh
            Submit_score.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Submit_score, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Submit_score.started')
            # update status
            Submit_score.status = STARTED
            Submit_score.setAutoDraw(True)
        
        # if Submit_score is active this frame...
        if Submit_score.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            p_vastness.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in p_vastness.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "p_vastness" ---
    for thisComponent in p_vastness.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for p_vastness
    p_vastness.tStop = globalClock.getTime(format='float')
    p_vastness.tStopRefresh = tThisFlipGlobal
    thisExp.addData('p_vastness.stopped', p_vastness.tStop)
    thisExp.addData('slider.response', slider.getRating())
    thisExp.addData('slider.rt', slider.getRT())
    # store data for thisExp (ExperimentHandler)
    thisExp.addData('mouse_4.x', mouse_4.x)
    thisExp.addData('mouse_4.y', mouse_4.y)
    thisExp.addData('mouse_4.leftButton', mouse_4.leftButton)
    thisExp.addData('mouse_4.midButton', mouse_4.midButton)
    thisExp.addData('mouse_4.rightButton', mouse_4.rightButton)
    thisExp.addData('mouse_4.time', mouse_4.time)
    thisExp.addData('mouse_4.clicked_name', mouse_4.clicked_name)
    thisExp.nextEntry()
    # the Routine "p_vastness" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    trials = data.TrialHandler2(
        name='trials',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions(expInfo['conditionFile']), 
        seed=None, 
    )
    thisExp.addLoop(trials)  # add the loop to the experiment
    thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            globals()[paramName] = thisTrial[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTrial in trials:
        currentLoop = trials
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        # --- Prepare to start Routine "start_e" ---
        # create an object to store info about Routine start_e
        start_e = data.Routine(
            name='start_e',
            components=[text, key_resp],
        )
        start_e.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # create starting attributes for key_resp
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # store start times for start_e
        start_e.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        start_e.tStart = globalClock.getTime(format='float')
        start_e.status = STARTED
        thisExp.addData('start_e.started', start_e.tStart)
        start_e.maxDuration = None
        # keep track of which components have finished
        start_eComponents = start_e.components
        for thisComponent in start_e.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "start_e" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        start_e.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text* updates
            
            # if text is starting this frame...
            if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text.frameNStart = frameN  # exact frame index
                text.tStart = t  # local t and not account for scr refresh
                text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text.started')
                # update status
                text.status = STARTED
                text.setAutoDraw(True)
            
            # if text is active this frame...
            if text.status == STARTED:
                # update params
                pass
            
            # *key_resp* updates
            waitOnFlip = False
            
            # if key_resp is starting this frame...
            if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp.frameNStart = frameN  # exact frame index
                key_resp.tStart = t  # local t and not account for scr refresh
                key_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp.started')
                # update status
                key_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    key_resp.duration = _key_resp_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                start_e.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in start_e.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "start_e" ---
        for thisComponent in start_e.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for start_e
        start_e.tStop = globalClock.getTime(format='float')
        start_e.tStopRefresh = tThisFlipGlobal
        thisExp.addData('start_e.stopped', start_e.tStop)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
        trials.addData('key_resp.keys',key_resp.keys)
        if key_resp.keys != None:  # we had a response
            trials.addData('key_resp.rt', key_resp.rt)
            trials.addData('key_resp.duration', key_resp.duration)
        # the Routine "start_e" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "equations" ---
        # create an object to store info about Routine equations
        equations = data.Routine(
            name='equations',
            components=[math_equation],
        )
        equations.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        math_equation.setText(equation)
        # store start times for equations
        equations.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        equations.tStart = globalClock.getTime(format='float')
        equations.status = STARTED
        thisExp.addData('equations.started', equations.tStart)
        equations.maxDuration = None
        # keep track of which components have finished
        equationsComponents = equations.components
        for thisComponent in equations.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "equations" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        equations.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 3.0:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *math_equation* updates
            
            # if math_equation is starting this frame...
            if math_equation.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                math_equation.frameNStart = frameN  # exact frame index
                math_equation.tStart = t  # local t and not account for scr refresh
                math_equation.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(math_equation, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'math_equation.started')
                # update status
                math_equation.status = STARTED
                math_equation.setAutoDraw(True)
            
            # if math_equation is active this frame...
            if math_equation.status == STARTED:
                # update params
                pass
            
            # if math_equation is stopping this frame...
            if math_equation.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > math_equation.tStartRefresh + 3.0-frameTolerance:
                    # keep track of stop time/frame for later
                    math_equation.tStop = t  # not accounting for scr refresh
                    math_equation.tStopRefresh = tThisFlipGlobal  # on global time
                    math_equation.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'math_equation.stopped')
                    # update status
                    math_equation.status = FINISHED
                    math_equation.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                equations.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in equations.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "equations" ---
        for thisComponent in equations.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for equations
        equations.tStop = globalClock.getTime(format='float')
        equations.tStopRefresh = tThisFlipGlobal
        thisExp.addData('equations.stopped', equations.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if equations.maxDurationReached:
            routineTimer.addTime(-equations.maxDuration)
        elif equations.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-3.000000)
        
        # --- Prepare to start Routine "Image" ---
        # create an object to store info about Routine Image
        Image = data.Routine(
            name='Image',
            components=[image],
        )
        Image.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        image.setImage(imagename)
        # store start times for Image
        Image.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        Image.tStart = globalClock.getTime(format='float')
        Image.status = STARTED
        thisExp.addData('Image.started', Image.tStart)
        Image.maxDuration = None
        # keep track of which components have finished
        ImageComponents = Image.components
        for thisComponent in Image.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "Image" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        Image.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *image* updates
            
            # if image is starting this frame...
            if image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                image.frameNStart = frameN  # exact frame index
                image.tStart = t  # local t and not account for scr refresh
                image.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(image, 'tStartRefresh')  # time at next scr refresh
                # update status
                image.status = STARTED
                image.setAutoDraw(True)
            
            # if image is active this frame...
            if image.status == STARTED:
                # update params
                pass
            
            # if image is stopping this frame...
            if image.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > image.tStartRefresh + duration-frameTolerance:
                    # keep track of stop time/frame for later
                    image.tStop = t  # not accounting for scr refresh
                    image.tStopRefresh = tThisFlipGlobal  # on global time
                    image.frameNStop = frameN  # exact frame index
                    # update status
                    image.status = FINISHED
                    image.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                Image.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Image.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "Image" ---
        for thisComponent in Image.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for Image
        Image.tStop = globalClock.getTime(format='float')
        Image.tStopRefresh = tThisFlipGlobal
        thisExp.addData('Image.stopped', Image.tStop)
        # the Routine "Image" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "math_answer" ---
        # create an object to store info about Routine math_answer
        math_answer = data.Routine(
            name='math_answer',
            components=[answers, answer_a, answer_b, answer_end],
        )
        math_answer.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        answer_a.setText(a)
        answer_b.setText(b)
        # setup some python lists for storing info about the answer_end
        answer_end.x = []
        answer_end.y = []
        answer_end.leftButton = []
        answer_end.midButton = []
        answer_end.rightButton = []
        answer_end.time = []
        answer_end.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for math_answer
        math_answer.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        math_answer.tStart = globalClock.getTime(format='float')
        math_answer.status = STARTED
        thisExp.addData('math_answer.started', math_answer.tStart)
        math_answer.maxDuration = None
        # keep track of which components have finished
        math_answerComponents = math_answer.components
        for thisComponent in math_answer.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "math_answer" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        math_answer.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *answers* updates
            
            # if answers is starting this frame...
            if answers.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                answers.frameNStart = frameN  # exact frame index
                answers.tStart = t  # local t and not account for scr refresh
                answers.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(answers, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'answers.started')
                # update status
                answers.status = STARTED
                answers.setAutoDraw(True)
            
            # if answers is active this frame...
            if answers.status == STARTED:
                # update params
                pass
            
            # *answer_a* updates
            
            # if answer_a is starting this frame...
            if answer_a.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                answer_a.frameNStart = frameN  # exact frame index
                answer_a.tStart = t  # local t and not account for scr refresh
                answer_a.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(answer_a, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'answer_a.started')
                # update status
                answer_a.status = STARTED
                answer_a.setAutoDraw(True)
            
            # if answer_a is active this frame...
            if answer_a.status == STARTED:
                # update params
                pass
            
            # *answer_b* updates
            
            # if answer_b is starting this frame...
            if answer_b.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                answer_b.frameNStart = frameN  # exact frame index
                answer_b.tStart = t  # local t and not account for scr refresh
                answer_b.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(answer_b, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'answer_b.started')
                # update status
                answer_b.status = STARTED
                answer_b.setAutoDraw(True)
            
            # if answer_b is active this frame...
            if answer_b.status == STARTED:
                # update params
                pass
            # *answer_end* updates
            
            # if answer_end is starting this frame...
            if answer_end.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                answer_end.frameNStart = frameN  # exact frame index
                answer_end.tStart = t  # local t and not account for scr refresh
                answer_end.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(answer_end, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('answer_end.started', t)
                # update status
                answer_end.status = STARTED
                answer_end.mouseClock.reset()
                prevButtonState = answer_end.getPressed()  # if button is down already this ISN'T a new click
            if answer_end.status == STARTED:  # only update if started and not finished!
                buttons = answer_end.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([answer_a, answer_b], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(answer_end):
                                gotValidClick = True
                                answer_end.clicked_name.append(obj.name)
                        if not gotValidClick:
                            answer_end.clicked_name.append(None)
                        x, y = answer_end.getPos()
                        answer_end.x.append(x)
                        answer_end.y.append(y)
                        buttons = answer_end.getPressed()
                        answer_end.leftButton.append(buttons[0])
                        answer_end.midButton.append(buttons[1])
                        answer_end.rightButton.append(buttons[2])
                        answer_end.time.append(answer_end.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                math_answer.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in math_answer.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "math_answer" ---
        for thisComponent in math_answer.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for math_answer
        math_answer.tStop = globalClock.getTime(format='float')
        math_answer.tStopRefresh = tThisFlipGlobal
        thisExp.addData('math_answer.stopped', math_answer.tStop)
        # store data for trials (TrialHandler)
        trials.addData('answer_end.x', answer_end.x)
        trials.addData('answer_end.y', answer_end.y)
        trials.addData('answer_end.leftButton', answer_end.leftButton)
        trials.addData('answer_end.midButton', answer_end.midButton)
        trials.addData('answer_end.rightButton', answer_end.rightButton)
        trials.addData('answer_end.time', answer_end.time)
        trials.addData('answer_end.clicked_name', answer_end.clicked_name)
        # the Routine "math_answer" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "time_start" ---
        # create an object to store info about Routine time_start
        time_start = data.Routine(
            name='time_start',
            components=[start_time, hg_start_bottom, hg_start_top, start_time_mouse],
        )
        time_start.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the start_time_mouse
        start_time_mouse.x = []
        start_time_mouse.y = []
        start_time_mouse.leftButton = []
        start_time_mouse.midButton = []
        start_time_mouse.rightButton = []
        start_time_mouse.time = []
        start_time_mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for time_start
        time_start.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        time_start.tStart = globalClock.getTime(format='float')
        time_start.status = STARTED
        thisExp.addData('time_start.started', time_start.tStart)
        time_start.maxDuration = None
        # keep track of which components have finished
        time_startComponents = time_start.components
        for thisComponent in time_start.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "time_start" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        time_start.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *start_time* updates
            
            # if start_time is starting this frame...
            if start_time.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                start_time.frameNStart = frameN  # exact frame index
                start_time.tStart = t  # local t and not account for scr refresh
                start_time.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(start_time, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'start_time.started')
                # update status
                start_time.status = STARTED
                start_time.setAutoDraw(True)
            
            # if start_time is active this frame...
            if start_time.status == STARTED:
                # update params
                pass
            
            # *hg_start_bottom* updates
            
            # if hg_start_bottom is starting this frame...
            if hg_start_bottom.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                hg_start_bottom.frameNStart = frameN  # exact frame index
                hg_start_bottom.tStart = t  # local t and not account for scr refresh
                hg_start_bottom.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(hg_start_bottom, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'hg_start_bottom.started')
                # update status
                hg_start_bottom.status = STARTED
                hg_start_bottom.setAutoDraw(True)
            
            # if hg_start_bottom is active this frame...
            if hg_start_bottom.status == STARTED:
                # update params
                pass
            
            # *hg_start_top* updates
            
            # if hg_start_top is starting this frame...
            if hg_start_top.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                hg_start_top.frameNStart = frameN  # exact frame index
                hg_start_top.tStart = t  # local t and not account for scr refresh
                hg_start_top.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(hg_start_top, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'hg_start_top.started')
                # update status
                hg_start_top.status = STARTED
                hg_start_top.setAutoDraw(True)
            
            # if hg_start_top is active this frame...
            if hg_start_top.status == STARTED:
                # update params
                pass
            # *start_time_mouse* updates
            
            # if start_time_mouse is starting this frame...
            if start_time_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                start_time_mouse.frameNStart = frameN  # exact frame index
                start_time_mouse.tStart = t  # local t and not account for scr refresh
                start_time_mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(start_time_mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('start_time_mouse.started', t)
                # update status
                start_time_mouse.status = STARTED
                start_time_mouse.mouseClock.reset()
                prevButtonState = start_time_mouse.getPressed()  # if button is down already this ISN'T a new click
            if start_time_mouse.status == STARTED:  # only update if started and not finished!
                buttons = start_time_mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([hg_start_top, hg_start_bottom], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(start_time_mouse):
                                gotValidClick = True
                                start_time_mouse.clicked_name.append(obj.name)
                        if not gotValidClick:
                            start_time_mouse.clicked_name.append(None)
                        x, y = start_time_mouse.getPos()
                        start_time_mouse.x.append(x)
                        start_time_mouse.y.append(y)
                        buttons = start_time_mouse.getPressed()
                        start_time_mouse.leftButton.append(buttons[0])
                        start_time_mouse.midButton.append(buttons[1])
                        start_time_mouse.rightButton.append(buttons[2])
                        start_time_mouse.time.append(start_time_mouse.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                time_start.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in time_start.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "time_start" ---
        for thisComponent in time_start.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for time_start
        time_start.tStop = globalClock.getTime(format='float')
        time_start.tStopRefresh = tThisFlipGlobal
        thisExp.addData('time_start.stopped', time_start.tStop)
        # store data for trials (TrialHandler)
        trials.addData('start_time_mouse.x', start_time_mouse.x)
        trials.addData('start_time_mouse.y', start_time_mouse.y)
        trials.addData('start_time_mouse.leftButton', start_time_mouse.leftButton)
        trials.addData('start_time_mouse.midButton', start_time_mouse.midButton)
        trials.addData('start_time_mouse.rightButton', start_time_mouse.rightButton)
        trials.addData('start_time_mouse.time', start_time_mouse.time)
        trials.addData('start_time_mouse.clicked_name', start_time_mouse.clicked_name)
        # the Routine "time_start" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "time_end" ---
        # create an object to store info about Routine time_end
        time_end = data.Routine(
            name='time_end',
            components=[end_time, hg_end_bottom, hg_end_top, end_time_mouse],
        )
        time_end.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # setup some python lists for storing info about the end_time_mouse
        end_time_mouse.x = []
        end_time_mouse.y = []
        end_time_mouse.leftButton = []
        end_time_mouse.midButton = []
        end_time_mouse.rightButton = []
        end_time_mouse.time = []
        end_time_mouse.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for time_end
        time_end.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        time_end.tStart = globalClock.getTime(format='float')
        time_end.status = STARTED
        thisExp.addData('time_end.started', time_end.tStart)
        time_end.maxDuration = None
        # keep track of which components have finished
        time_endComponents = time_end.components
        for thisComponent in time_end.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "time_end" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        time_end.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *end_time* updates
            
            # if end_time is starting this frame...
            if end_time.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                end_time.frameNStart = frameN  # exact frame index
                end_time.tStart = t  # local t and not account for scr refresh
                end_time.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(end_time, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'end_time.started')
                # update status
                end_time.status = STARTED
                end_time.setAutoDraw(True)
            
            # if end_time is active this frame...
            if end_time.status == STARTED:
                # update params
                pass
            
            # *hg_end_bottom* updates
            
            # if hg_end_bottom is starting this frame...
            if hg_end_bottom.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                hg_end_bottom.frameNStart = frameN  # exact frame index
                hg_end_bottom.tStart = t  # local t and not account for scr refresh
                hg_end_bottom.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(hg_end_bottom, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'hg_end_bottom.started')
                # update status
                hg_end_bottom.status = STARTED
                hg_end_bottom.setAutoDraw(True)
            
            # if hg_end_bottom is active this frame...
            if hg_end_bottom.status == STARTED:
                # update params
                pass
            
            # *hg_end_top* updates
            
            # if hg_end_top is starting this frame...
            if hg_end_top.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                hg_end_top.frameNStart = frameN  # exact frame index
                hg_end_top.tStart = t  # local t and not account for scr refresh
                hg_end_top.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(hg_end_top, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'hg_end_top.started')
                # update status
                hg_end_top.status = STARTED
                hg_end_top.setAutoDraw(True)
            
            # if hg_end_top is active this frame...
            if hg_end_top.status == STARTED:
                # update params
                pass
            # *end_time_mouse* updates
            
            # if end_time_mouse is starting this frame...
            if end_time_mouse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                end_time_mouse.frameNStart = frameN  # exact frame index
                end_time_mouse.tStart = t  # local t and not account for scr refresh
                end_time_mouse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(end_time_mouse, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('end_time_mouse.started', t)
                # update status
                end_time_mouse.status = STARTED
                end_time_mouse.mouseClock.reset()
                prevButtonState = end_time_mouse.getPressed()  # if button is down already this ISN'T a new click
            if end_time_mouse.status == STARTED:  # only update if started and not finished!
                buttons = end_time_mouse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([hg_end_top, hg_end_bottom], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(end_time_mouse):
                                gotValidClick = True
                                end_time_mouse.clicked_name.append(obj.name)
                        if not gotValidClick:
                            end_time_mouse.clicked_name.append(None)
                        x, y = end_time_mouse.getPos()
                        end_time_mouse.x.append(x)
                        end_time_mouse.y.append(y)
                        buttons = end_time_mouse.getPressed()
                        end_time_mouse.leftButton.append(buttons[0])
                        end_time_mouse.midButton.append(buttons[1])
                        end_time_mouse.rightButton.append(buttons[2])
                        end_time_mouse.time.append(end_time_mouse.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                time_end.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in time_end.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "time_end" ---
        for thisComponent in time_end.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for time_end
        time_end.tStop = globalClock.getTime(format='float')
        time_end.tStopRefresh = tThisFlipGlobal
        thisExp.addData('time_end.stopped', time_end.tStop)
        # store data for trials (TrialHandler)
        trials.addData('end_time_mouse.x', end_time_mouse.x)
        trials.addData('end_time_mouse.y', end_time_mouse.y)
        trials.addData('end_time_mouse.leftButton', end_time_mouse.leftButton)
        trials.addData('end_time_mouse.midButton', end_time_mouse.midButton)
        trials.addData('end_time_mouse.rightButton', end_time_mouse.rightButton)
        trials.addData('end_time_mouse.time', end_time_mouse.time)
        trials.addData('end_time_mouse.clicked_name', end_time_mouse.clicked_name)
        # the Routine "time_end" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "vastness" ---
        # create an object to store info about Routine vastness
        vastness = data.Routine(
            name='vastness',
            components=[vast_Q_2, slider_2, mouse_6, define_vast_2, Submit_score_button_2, Submit_score_2],
        )
        vastness.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        slider_2.reset()
        # setup some python lists for storing info about the mouse_6
        mouse_6.x = []
        mouse_6.y = []
        mouse_6.leftButton = []
        mouse_6.midButton = []
        mouse_6.rightButton = []
        mouse_6.time = []
        mouse_6.clicked_name = []
        gotValidClick = False  # until a click is received
        # store start times for vastness
        vastness.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        vastness.tStart = globalClock.getTime(format='float')
        vastness.status = STARTED
        thisExp.addData('vastness.started', vastness.tStart)
        vastness.maxDuration = None
        # keep track of which components have finished
        vastnessComponents = vastness.components
        for thisComponent in vastness.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "vastness" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        vastness.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *vast_Q_2* updates
            
            # if vast_Q_2 is starting this frame...
            if vast_Q_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                vast_Q_2.frameNStart = frameN  # exact frame index
                vast_Q_2.tStart = t  # local t and not account for scr refresh
                vast_Q_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(vast_Q_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'vast_Q_2.started')
                # update status
                vast_Q_2.status = STARTED
                vast_Q_2.setAutoDraw(True)
            
            # if vast_Q_2 is active this frame...
            if vast_Q_2.status == STARTED:
                # update params
                pass
            
            # *slider_2* updates
            
            # if slider_2 is starting this frame...
            if slider_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                slider_2.frameNStart = frameN  # exact frame index
                slider_2.tStart = t  # local t and not account for scr refresh
                slider_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(slider_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'slider_2.started')
                # update status
                slider_2.status = STARTED
                slider_2.setAutoDraw(True)
            
            # if slider_2 is active this frame...
            if slider_2.status == STARTED:
                # update params
                pass
            # *mouse_6* updates
            
            # if mouse_6 is starting this frame...
            if mouse_6.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouse_6.frameNStart = frameN  # exact frame index
                mouse_6.tStart = t  # local t and not account for scr refresh
                mouse_6.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouse_6, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.addData('mouse_6.started', t)
                # update status
                mouse_6.status = STARTED
                mouse_6.mouseClock.reset()
                prevButtonState = mouse_6.getPressed()  # if button is down already this ISN'T a new click
            if mouse_6.status == STARTED:  # only update if started and not finished!
                buttons = mouse_6.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        clickableList = environmenttools.getFromNames([Submit_score_2, Submit_score_button_2], namespace=locals())
                        for obj in clickableList:
                            # is this object clicked on?
                            if obj.contains(mouse_6):
                                gotValidClick = True
                                mouse_6.clicked_name.append(obj.name)
                        if not gotValidClick:
                            mouse_6.clicked_name.append(None)
                        x, y = mouse_6.getPos()
                        mouse_6.x.append(x)
                        mouse_6.y.append(y)
                        buttons = mouse_6.getPressed()
                        mouse_6.leftButton.append(buttons[0])
                        mouse_6.midButton.append(buttons[1])
                        mouse_6.rightButton.append(buttons[2])
                        mouse_6.time.append(mouse_6.mouseClock.getTime())
                        if gotValidClick:
                            continueRoutine = False  # end routine on response
            
            # *define_vast_2* updates
            
            # if define_vast_2 is starting this frame...
            if define_vast_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                define_vast_2.frameNStart = frameN  # exact frame index
                define_vast_2.tStart = t  # local t and not account for scr refresh
                define_vast_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(define_vast_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                define_vast_2.status = STARTED
                define_vast_2.setAutoDraw(True)
            
            # if define_vast_2 is active this frame...
            if define_vast_2.status == STARTED:
                # update params
                pass
            
            # *Submit_score_button_2* updates
            
            # if Submit_score_button_2 is starting this frame...
            if Submit_score_button_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Submit_score_button_2.frameNStart = frameN  # exact frame index
                Submit_score_button_2.tStart = t  # local t and not account for scr refresh
                Submit_score_button_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Submit_score_button_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Submit_score_button_2.started')
                # update status
                Submit_score_button_2.status = STARTED
                Submit_score_button_2.setAutoDraw(True)
            
            # if Submit_score_button_2 is active this frame...
            if Submit_score_button_2.status == STARTED:
                # update params
                pass
            
            # *Submit_score_2* updates
            
            # if Submit_score_2 is starting this frame...
            if Submit_score_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                Submit_score_2.frameNStart = frameN  # exact frame index
                Submit_score_2.tStart = t  # local t and not account for scr refresh
                Submit_score_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(Submit_score_2, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'Submit_score_2.started')
                # update status
                Submit_score_2.status = STARTED
                Submit_score_2.setAutoDraw(True)
            
            # if Submit_score_2 is active this frame...
            if Submit_score_2.status == STARTED:
                # update params
                pass
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                vastness.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in vastness.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "vastness" ---
        for thisComponent in vastness.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for vastness
        vastness.tStop = globalClock.getTime(format='float')
        vastness.tStopRefresh = tThisFlipGlobal
        thisExp.addData('vastness.stopped', vastness.tStop)
        trials.addData('slider_2.response', slider_2.getRating())
        trials.addData('slider_2.rt', slider_2.getRT())
        # store data for trials (TrialHandler)
        trials.addData('mouse_6.x', mouse_6.x)
        trials.addData('mouse_6.y', mouse_6.y)
        trials.addData('mouse_6.leftButton', mouse_6.leftButton)
        trials.addData('mouse_6.midButton', mouse_6.midButton)
        trials.addData('mouse_6.rightButton', mouse_6.rightButton)
        trials.addData('mouse_6.time', mouse_6.time)
        trials.addData('mouse_6.clicked_name', mouse_6.clicked_name)
        # the Routine "vastness" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "catch" ---
        # create an object to store info about Routine catch
        catch = data.Routine(
            name='catch',
            components=[text_3, key_resp_2],
        )
        catch.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        text_3.setText('')
        # create starting attributes for key_resp_2
        key_resp_2.keys = []
        key_resp_2.rt = []
        _key_resp_2_allKeys = []
        # Run 'Begin Routine' code from code_2
        # Run on trials 10, 20, 30... (indices 9, 19, 29...)
        if (trials.thisN + 1) % 10 != 0:  # +1 to convert to 1-indexed
            continueRoutine = False
        # store start times for catch
        catch.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        catch.tStart = globalClock.getTime(format='float')
        catch.status = STARTED
        thisExp.addData('catch.started', catch.tStart)
        catch.maxDuration = None
        # keep track of which components have finished
        catchComponents = catch.components
        for thisComponent in catch.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "catch" ---
        # if trial has changed, end Routine now
        if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
            continueRoutine = False
        catch.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *text_3* updates
            
            # if text_3 is starting this frame...
            if text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                text_3.frameNStart = frameN  # exact frame index
                text_3.tStart = t  # local t and not account for scr refresh
                text_3.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(text_3, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_3.started')
                # update status
                text_3.status = STARTED
                text_3.setAutoDraw(True)
            
            # if text_3 is active this frame...
            if text_3.status == STARTED:
                # update params
                pass
            
            # *key_resp_2* updates
            
            # if key_resp_2 is starting this frame...
            if key_resp_2.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_resp_2.frameNStart = frameN  # exact frame index
                key_resp_2.tStart = t  # local t and not account for scr refresh
                key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                key_resp_2.status = STARTED
                # keyboard checking is just starting
                key_resp_2.clock.reset()  # now t=0
            if key_resp_2.status == STARTED:
                theseKeys = key_resp_2.getKeys(keyList=['c','a','g','o','t'], ignoreKeys=["escape"], waitRelease=False)
                _key_resp_2_allKeys.extend(theseKeys)
                if len(_key_resp_2_allKeys):
                    key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                    key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                    key_resp_2.duration = _key_resp_2_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                catch.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in catch.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "catch" ---
        for thisComponent in catch.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for catch
        catch.tStop = globalClock.getTime(format='float')
        catch.tStopRefresh = tThisFlipGlobal
        thisExp.addData('catch.stopped', catch.tStop)
        # check responses
        if key_resp_2.keys in ['', [], None]:  # No response was made
            key_resp_2.keys = None
        trials.addData('key_resp_2.keys',key_resp_2.keys)
        if key_resp_2.keys != None:  # we had a response
            trials.addData('key_resp_2.rt', key_resp_2.rt)
            trials.addData('key_resp_2.duration', key_resp_2.duration)
        # the Routine "catch" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'trials'
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "end" ---
    # create an object to store info about Routine end
    end = data.Routine(
        name='end',
        components=[text_2, text_6, text_7],
    )
    end.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for end
    end.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    end.tStart = globalClock.getTime(format='float')
    end.status = STARTED
    thisExp.addData('end.started', end.tStart)
    end.maxDuration = None
    # keep track of which components have finished
    endComponents = end.components
    for thisComponent in end.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end" ---
    end.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        
        # if text_2 is starting this frame...
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_2.started')
            # update status
            text_2.status = STARTED
            text_2.setAutoDraw(True)
        
        # if text_2 is active this frame...
        if text_2.status == STARTED:
            # update params
            pass
        
        # *text_6* updates
        
        # if text_6 is starting this frame...
        if text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_6.frameNStart = frameN  # exact frame index
            text_6.tStart = t  # local t and not account for scr refresh
            text_6.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_6, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_6.status = STARTED
            text_6.setAutoDraw(True)
        
        # if text_6 is active this frame...
        if text_6.status == STARTED:
            # update params
            pass
        
        # *text_7* updates
        
        # if text_7 is starting this frame...
        if text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_7.frameNStart = frameN  # exact frame index
            text_7.tStart = t  # local t and not account for scr refresh
            text_7.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_7, 'tStartRefresh')  # time at next scr refresh
            # update status
            text_7.status = STARTED
            text_7.setAutoDraw(True)
        
        # if text_7 is active this frame...
        if text_7.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            end.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end" ---
    for thisComponent in end.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for end
    end.tStop = globalClock.getTime(format='float')
    end.tStopRefresh = tThisFlipGlobal
    thisExp.addData('end.stopped', end.tStop)
    thisExp.nextEntry()
    # the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
