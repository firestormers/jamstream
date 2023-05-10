const Library = ({data}) => {
    console.log(data);
  
    return (
      <div>
        {data.map((e) => {
          return (
            <div
              style={{
                width: '180px',
                height: '180px',
                marginLeft: '30px',
                marginTop: '30px',
              }}
            >
              <img src={e.image} alt="album cover" />
              <p>title: {e.title}</p>
              <p>artist: {e.artist}</p>
              <audio src={e.audio} controls></audio>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Library;
  