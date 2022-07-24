import React, { Component } from 'react'
import ReactPlayer from 'react-player/lazy'
import Duration from './Duration'

class App extends Component {
  state = {
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    currentText:"",
    playbackRate: 1.0,
    transcript: null
  }

  //transcript
  parsJsonIntoDictionary=(json)=>
  {
    var result = JSON.parse(JSON.stringify(json));
    var dict = {};
    
    result.transcript.forEach(element => {
      var index = Math.floor(element.start/5);
      if(dict[index] == undefined)
      {
        dict[index] = element.text;
      }
      else
      {
        dict[index]+=" " + element.text;
      }
      
    });
    this.transcript = dict;
  }

  parseJsonTranscript = () => {
    // this is only for testing, should be removed from the codes
    var json = {
      "transcript": [
          {
              "duration": 2.406,
              "start": 0.0,
              "text": "Hi, my name is Sethi and welcome back to the channel"
          },
          {
              "duration": 2.999,
              "start": 2.406,
              "text": "where we make educational technology easy for you."
          },
          {
              "duration": 3.005,
              "start": 5.405,
              "text": "In today's video, I'm going to show you how you can go on to"
          },
          {
              "duration": 3.744,
              "start": 8.41,
              "text": "YouTube and add your own subtitles or translations to videos."
          },
          {
              "duration": 3.753,
              "start": 12.154,
              "text": "Let's dive into it with another Flipped Classroom tutorial."
          },
          {
              "duration": 2.964,
              "start": 15.907,
              "text": "Now, this video is a response to a question I've been asked"
          },
          {
              "duration": 3.496,
              "start": 18.871,
              "text": "a couple of times and that is, \"Can we add our own subtitles"
          },
          {
              "duration": 2.783,
              "start": 22.367,
              "text": "in our own native language to your videos?\" Well, the "
          },
          {
              "duration": 3.687,
              "start": 25.15,
              "text": "answer is, \"Absolutely, you can.\" Now, many channels have"
          },
          {
              "duration": 3.253,
              "start": 28.837,
              "text": "opened up translations, and I will show you exactly how to"
          },
          {
              "duration": 2.25,
              "start": 32.09,
              "text": "get to them. Now, the first thing you'll have to do is go on"
          },
          {
              "duration": 2.249,
              "start": 34.34,
              "text": "to YouTube. Now, I'm going to use my own videos as an"
          },
          {
              "duration": 2.5,
              "start": 36.589,
              "text": "example, so I'm going to jump on to the video. Now, if "
          },
          {
              "duration": 2.464,
              "start": 39.089,
              "text": "you've been a fan of the channel for a while, I would really"
          },
          {
              "duration": 2.75,
              "start": 41.553,
              "text": "appreciate it if you considered adding your own native"
          },
          {
              "duration": 4.0,
              "start": 44.303,
              "text": "language to my videos. I would really like to see all these"
          },
          {
              "duration": 2.503,
              "start": 48.303,
              "text": "different languages in those subtitles and it would also"
          },
          {
              "duration": 2.747,
              "start": 50.806,
              "text": "help us reach even more teachers and students around the"
          },
          {
              "duration": 3.009,
              "start": 53.553,
              "text": "world, bring this community together. Now, let's say that"
          },
          {
              "duration": 2.494,
              "start": 56.562,
              "text": "you're on this video right here, and you'd like to add your"
          },
          {
              "duration": 3.994,
              "start": 59.056,
              "text": "own subtitles. Now, there are two places you can go to to "
          },
          {
              "duration": 3.503,
              "start": 63.05,
              "text": "get this done. The first is on the video itself. So there is"
          },
          {
              "duration": 2.753,
              "start": 66.553,
              "text": "a cogwheel right there, and when you click on that cogwheel,"
          },
          {
              "duration": 3.249,
              "start": 69.306,
              "text": "you enter the video menu. This is where you can select"
          },
          {
              "duration": 3.249,
              "start": 72.555,
              "text": "different playback qualities, but at the bottom, you'll also"
          },
          {
              "duration": 3.75,
              "start": 75.804,
              "text": "see \"Closed captions\", \"CC\" or \"Subtitles\". Now, go ahead and"
          },
          {
              "duration": 4.252,
              "start": 79.554,
              "text": "click on that. In addition to the already present closed"
          },
          {
              "duration": 2.929,
              "start": 83.806,
              "text": "captions and subtitles, you can click on that button that"
          },
          {
              "duration": 2.968,
              "start": 86.735,
              "text": "says \"Add translation\". Now, when you add your own"
          },
          {
              "duration": 3.247,
              "start": 89.703,
              "text": "translation, what you can do now is you can fill out your"
          },
          {
              "duration": 3.007,
              "start": 92.95,
              "text": "own translation and then that will be approved by whoever"
          },
          {
              "duration": 2.499,
              "start": 95.957,
              "text": "uploaded the video in the first place. Now, these"
          },
          {
              "duration": 3.256,
              "start": 98.456,
              "text": "translations won't go live as soon as you finish, because I"
          },
          {
              "duration": 3.244,
              "start": 101.712,
              "text": "do have to approve and check everything before it goes live."
          },
          {
              "duration": 2.713,
              "start": 104.956,
              "text": "Now, if you do not see this option, well, then that is"
          },
          {
              "duration": 3.255,
              "start": 107.669,
              "text": "because the original content creator or the producer of the"
          },
          {
              "duration": 4.502,
              "start": 110.924,
              "text": "video has not enabled you, as the community, to upload their"
          },
          {
              "duration": 2.747,
              "start": 115.426,
              "text": "own community translations. Now, if that happens and you"
          },
          {
              "duration": 1.999,
              "start": 118.173,
              "text": "have a video and you really would like to add some"
          },
          {
              "duration": 2.717,
              "start": 120.172,
              "text": "translations, you could always reach out to that creator"
          },
          {
              "duration": 2.245,
              "start": 122.889,
              "text": "and there's a very good chance that they will switch it on"
          },
          {
              "duration": 3.007,
              "start": 125.134,
              "text": "for you. Now, the second option to add translations, well,"
          },
          {
              "duration": 2.999,
              "start": 128.141,
              "text": "that's a little bit closer to that description box. You will"
          },
          {
              "duration": 3.001,
              "start": 131.14,
              "text": "see as you scroll down, above the \"Subscribe\" button, you'll"
          },
          {
              "duration": 3.218,
              "start": 134.141,
              "text": "see three dots. Now, if that \"Subscribe\" button on your page"
          },
          {
              "duration": 1.747,
              "start": 137.359,
              "text": "at the moment is still red, make sure that you hit that"
          },
          {
              "duration": 3.001,
              "start": 139.106,
              "text": "\"Subscribe\" button and subscribe to our channel, and then go"
          },
          {
              "duration": 2.749,
              "start": 142.107,
              "text": "ahead and click on those three dots. Once you've clicked on"
          },
          {
              "duration": 2.747,
              "start": 144.856,
              "text": "those three dots, you can now add translations. It brings"
          },
          {
              "duration": 3.966,
              "start": 147.603,
              "text": "you into the translation menu, and it's automatically set to"
          },
          {
              "duration": 3.503,
              "start": 151.569,
              "text": "a default language. At the top, you can switch the language,"
          },
          {
              "duration": 2.745,
              "start": 155.072,
              "text": "so whenever you switch the language, you can start adding in"
          },
          {
              "duration": 3.255,
              "start": 157.817,
              "text": "your own translations or tweaking them. Now, this is not the"
          },
          {
              "duration": 2.75,
              "start": 161.072,
              "text": "only thing you can do. You can also translate the title and"
          },
          {
              "duration": 4.002,
              "start": 163.822,
              "text": "description, and really help the users of this platform on"
          },
          {
              "duration": 8.002,
              "start": 163.822,
              "text": "YouTube find our content, and really help the viewers of "
          },
          {
              "duration": 2.749,
              "start": 171.824,
              "text": "these videos understand each and every step. Once you've"
          },
          {
              "duration": 2.994,
              "start": 174.573,
              "text": "translated everything, you can save that as a draft or you"
          },
          {
              "duration": 2.509,
              "start": 177.567,
              "text": "can even submit it. Now, once you've submitted your "
          },
          {
              "duration": 3.247,
              "start": 180.076,
              "text": "translations, it goes to the original creator, and then that"
          },
          {
              "duration": 3.684,
              "start": 183.323,
              "text": "creator can make your subtitles and translations live. Now,"
          },
          {
              "duration": 2.746,
              "start": 187.007,
              "text": "I would really appreciate it if you did so and do let me know"
          },
          {
              "duration": 3.25,
              "start": 189.753,
              "text": "in that comment section below if you are adding translations"
          },
          {
              "duration": 2.756,
              "start": 193.003,
              "text": "to any channel, what sort of channels you are adding"
          },
          {
              "duration": 2.717,
              "start": 195.759,
              "text": "translations to, what makes you want to add translations,"
          },
          {
              "duration": 2.743,
              "start": 198.476,
              "text": "and what some of the reasons that you do not want to add"
          },
          {
              "duration": 2.755,
              "start": 201.219,
              "text": "translations are. I would really love to read all about it in"
          },
          {
              "duration": 3.501,
              "start": 203.974,
              "text": "that comment section below, and again, I read every single"
          },
          {
              "duration": 3.24,
              "start": 207.475,
              "text": "comment. So do let me know if you are considering adding"
          },
          {
              "duration": 2.514,
              "start": 210.715,
              "text": "translations to my videos. Now, you've probably seen some"
          },
          {
              "duration": 2.982,
              "start": 213.229,
              "text": "channels with dozens of different subtitles and different"
          },
          {
              "duration": 2.729,
              "start": 216.211,
              "text": "languages, and wondered how this is possible. Well, in that"
          },
          {
              "duration": 4.001,
              "start": 218.94,
              "text": "description, you'll see exactly who has contributed to those"
          },
          {
              "duration": 2.999,
              "start": 222.941,
              "text": "translations. Now, I thank you as a community for even"
          },
          {
              "duration": 2.969,
              "start": 225.94,
              "text": "considering adding translations to my videos. On your way"
          },
          {
              "duration": 2.995,
              "start": 228.909,
              "text": "back up, make sure you hit subscribe, and that bell"
          },
          {
              "duration": 2.996,
              "start": 231.904,
              "text": "notification, so you can be notified of new videos. Now, in"
          },
          {
              "duration": 2.759,
              "start": 234.9,
              "text": "that description, I have a number of different links to both"
          },
          {
              "duration": 2.753,
              "start": 237.659,
              "text": "my website and Patreon community, and I would appreciate it"
          },
          {
              "duration": 2.745,
              "start": 240.412,
              "text": "if you had a quick look at all those things. Now, I thank"
          },
          {
              "duration": 2.327,
              "start": 243.157,
              "text": "you for watching, and I'll see you in the next one."
          }
      ]
  }
    this.parsJsonIntoDictionary(json)
   
  }

  updateSubtitles = (currentTime)=>{
    //this call should be removed as we must already have the transcripts when user submits the youtube link
    this.parseJsonTranscript("");
    
    if(this.transcript != undefined)
    {
      this.currentText = this.transcript[Math.floor(currentTime/5)]
    }
  }
 // end of transcript

  // controls
  handleProgress = state => {
    this.updateSubtitles(state.playedSeconds)
    if (!this.state.seeking) {
      this.setState(state)
      console.log(state.playedSeconds)
    }
  }

  handleSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  handleSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  handleSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }

  handlePlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing })
  }

    handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  handleVolumeChange = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  ref = player => {
    this.player = player
  }
  //end of controls

  render () {
    const { playing, volume, played, duration} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <ReactPlayer 
          ref={this.ref}
            url='https://www.youtube.com/watch?v=Q8Sq9r50gc0'
              playing={playing}
              volume={volume}
              onSeek={e => console.log('onSeek', e)}
              onProgress={this.handleProgress}
              onDuration={this.handleDuration}
              onPlay={this.handlePlay}
              onPause={this.handlePause}
          />
 
        </header>
        <table>
          <tbody>
            <tr>
                <th>Controls</th>
                <td>
                  <button onClick={this.handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                </td>
            </tr>
            <tr>
                <th>Seek</th>
                <td>
                  <input
                    type='range' min={0} max={0.999999} step='any'
                    value={played}
                    onMouseDown={this.handleSeekMouseDown}
                    onChange={this.handleSeekChange}
                    onMouseUp={this.handleSeekMouseUp}
                  />
                </td>
              </tr>
              <tr>
                <th>Volume</th>
                <td>
                  <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                </td>
              </tr>
            <tr>
              <th>duration</th>
              <td><Duration seconds={duration} /></td>
            </tr>
            <tr>
              <th>elapsed</th>
              <td><Duration seconds={duration * played} /></td>
            </tr>
            <tr>
              <th>remaining</th>
              <td><Duration seconds={duration * (1 - played)} /></td>
            </tr>
            <tr>
              <th>transcipt</th>
              <td>{this.currentText}</td>
            </tr>
          </tbody>
        </table>
        
      </div>
    )
  }
}

export default App