function TempSubmitWid() {
    return (
      <div className="mb-5 box-content h-96 w-[310px] rounded-md border border-reddit_border bg-reddit_dark-brighter">
        <div
          className="object-contain"
          style={{
            backgroundImage: `url("/topCommunitiesIcon.webp")`,
            backgroundColor: '#0079d3',
            backgroundPosition: '50%',
            backgroundRepeat: 'no-repeat',
            height: '70px',
            position: 'relative',
          }}
        ></div>
        <p className="text-sm text-reddit_text-darker">Please be mindful of bbaby content policy</p>
      </div>
    )
  }
  
  export default TempSubmitWid