
export default function CardBerandaInstansi({cardText, cardColor, cardImage, countNumber}) {
        return (
                <div style={{ background: cardColor }} className="p-5 flex items-center flex-col gap-2 justify-center rounded-md">
                        <div className="card-icon h-17 w-17">
                                <img src={cardImage} alt="" className="w-auto h-auto object-cover rounded-md"/>
                        </div>

                        <div className="card-text">     
                                <p className="font-bold text-base text-center">
                                        {cardText}
                                </p>
                        </div>

                        <div className="card-count-number">
                                <p className="font-bold text-base">
                                        {countNumber}
                                </p>
                        </div>
                </div>
        )
}