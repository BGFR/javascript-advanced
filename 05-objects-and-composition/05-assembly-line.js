//05. Assembly Line
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

function createAssemblyLine (){
        return {
          hasClima(myCar){
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = () => {
              return myCar.temp < myCar.tempSettings 
              ? myCar.temp +=1 :
              myCar.temp -=1;
            };
          },
          hasAudio (myCar){
            myCar.currentTrack = {
              name: null,
              artist:null
            };
            myCar.nowPlaying = () => {
              if (myCar.name !== null){
                console.log(`Now playing ${myCar.currentTrack.name} by ${myCar.currentTrack.artist}`);
              };
            };
          }, hasParktronic (myCar){
            myCar.checkDistance = (distance) => {
              distance < 0.1 ?
              console.log(`Beep! Beep! Beep!`):
              distance < 0.25 ?
              console.log(`Beep! Beep!`):
              distance < 0.5?
              console.log(`Beep!`):
              console.log('');

            };
          }

        }
 

} 
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);
