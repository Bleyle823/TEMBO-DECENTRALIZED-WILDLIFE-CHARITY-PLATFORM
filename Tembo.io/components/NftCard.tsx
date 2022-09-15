interface Props {
  image: string;
}

export const NftCard = ({ image }: Props) => {
  return (
    <div className="border-2 min-h-[300px] sm:py-4 max-w-[250px] rounded-xl  sm:rounded-md ">
      <div className="sm:-right-8 sm:-top-[50px] relative  ">
        <img
          src={image}
          alt="title"
          className="rounded-t-xl sm:rounded-lg w-full "
        />
      </div>
      <div className="px-5 py-3 sm:py-0  sm:-mt-4">
        <div className="flex justify-between w-full mb-4 mt-2 px-3">
        </div>
      </div>
    </div>
  );
};
export const NftCardWithButton = ({ image }: Props) => {
  return (
    <div className="flex flex-col rounded-xl  p-4 mt-5"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        {/* NFT collection link fetched from NFT.Storage*/}

        <div>
          <img
            src="https://bafkreifdd4jv277vboklz4r7wyayvb2kkdgrxsjbucunmrc5g7zfowpzxi.ipfs.nftstorage.link"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Crypto-Calves</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
  );
};

