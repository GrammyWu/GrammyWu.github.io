// 加载当前这首歌曲
const loadSong = (song) => {
  const { audioUrl, coverUrl, name } = song;
  const audio = e('#audio');
  const title = e("#title");
  const cover = e("#cover");
  title.innerText = name;
  audio.src = audioUrl;
  cover.src = coverUrl;
};

// 播放歌曲
const playSong = () => {
  const musicContainer = e("#music-container");
  const playBtn = e("#play");
  const audio = e('#audio');
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
   
  audio.play();
};

// 关闭歌曲
const pauseSong = () => {
  const musicContainer = e("#music-container");
  const playBtn = e("#play");
  const audio = e('#audio');
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
};

const bindEventPrevBtn = () => {
  const prevBtn = e("#prev");
  prevBtn.addEventListener("click", (event) => {
    songIndex -= 1;
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    // 载入这首歌曲
    loadSong(songs[songIndex]);
    // 播放这首歌曲
    playSong();
  });
};

const bindEventNextBtn = () => {
  const nextBtn = e("#next");
  nextBtn.addEventListener("click", (event) => {
    songIndex += 1;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
  });
};

const bindEventPlayBtn = () => {
  const playBtn = e('#play');
  playBtn.addEventListener("click", () => {
    const musicContainer = e("#music-container");
    log('musicContainer.classList.', musicContainer.classList)
    const isPlaying = musicContainer.classList.contains("play");

    if (isPlaying) {
      pauseSong();
    } else {
      log("打开音乐");
      playSong();
    }
  });
};

const bindEventUpdateProgress = () => {
  const audio = e('#audio');
  audio.addEventListener("timeupdate", (event) => {
    const currentTime = audio.currentTime
    const duration = audio.duration
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  });
};

// 关系：currentTime / duration
// 等于下面的
// offsetX / clientWidth

const bindEventSetProgress = () => {
  const progressContainer = e("#progress-container");
  const audio = e('#audio');
  progressContainer.addEventListener("click", (event) => {
    // 进度条的总宽度
    const width = progressContainer.clientWidth;
    // 鼠标点击的长度
    const clickX = event.offsetX;
    // 这首歌的总长时间
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  });
};

const bindEventAuidoNextSong = () => {
  const audio = e('#audio');
  audio.addEventListener("ended", (event) => {
    songIndex += 1;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
  });
};

const bindEvents = () => {
  // 上一首歌曲
  bindEventPrevBtn();
  // 下一首
  bindEventNextBtn()
  // 播放音乐
  bindEventPlayBtn();
  // 更新进度条
  bindEventUpdateProgress()
  // 点击设置进度条
  bindEventSetProgress()
  // 当前这首歌播放结束之后，播放下一首歌曲
  bindEventAuidoNextSong()
};

const init = () => {
  // 当前这首歌
  const currentSong = songs[songIndex];
  log('currentSong', currentSong)
  loadSong(currentSong);
};

// const init = function() {
// }

const __main = () => {
  window.songIndex = 1;
  // 初始化
  init();
  // 绑定事件
  bindEvents();
};

__main();
