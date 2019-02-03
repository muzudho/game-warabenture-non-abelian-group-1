var book = new Book();

/** 定跡を見て、次の１手を返す。なければ -1。 */
function getMoveByBook()
{
	// 現局面。
	var currentPosition = getPosition();

	// alert("正規化前 currentBoardText=" + currentPosition.getBoardText());
	
	// 正規化する。つまり、2４個の同型のうち、代表的な１つに置き換える。（定跡は 24分の1サイズに圧縮している）
	var normalizer = new Normalizer();
	var normalizedCurrentPosition;
	var unusedHanlde;
	var resultArray = normalizer.normalize(currentPosition, 0);
	
	var currentBoardText = resultArray[0].getBoardText();

	// 正規化したのだから、視角が変わるはず。
	var rotateX = resultArray[2];
	for (var i = 0; i < rotateX; i++)
	{
		// +X
		currentPosition.rotateView(2);
	}

	var rotateY = resultArray[3];
	for (var i = 0; i < rotateY; i++)
	{
		// +Y
		currentPosition.rotateView(0);
	}

	var rotateZ = resultArray[3];
	for (var i = 0; i < rotateZ; i++)
	{
		// +Z
		currentPosition.rotateView(1);
	}
	
	// alert("正規化後 currentBoardText=" + currentBoardText);
	
	// 定跡。
	var bookLines = book.getText().replace("\r", "").split("\n");
	// alert("bookLines.length=" + bookLines.length);
	
	for(i=0; i<bookLines.length; i++)
	{
		var line = bookLines[i];
		if (line.startsWith(currentBoardText))
		{
			var tokens = line.split(" ");

			// 定跡にあれば。
			// TODO このハンドルは、ノーマライズした局面のもの。現局面のハンドルに戻したい。
			var handle = tokens[1];
			
			return getReversedHandle(parseInt(handle));
		}
	}
	
	return -1;
}
