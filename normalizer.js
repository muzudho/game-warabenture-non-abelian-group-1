/**
 * 正規化をする。
 */
var Normalizer = function()
{
	this.isomorphicPosition = [];
	this.isomorphicX = [];
	this.isomorphicY = [];
	this.isomorphicZ = [];
};

/**
 * 同型を作ります。
 */
Normalizer.prototype.createIsomorphic = function(sourcePosition, isomorphicIndex, rotateX, rotateY, rotateZ)
{
	var pos = new Position();
	pos.copyFrom(sourcePosition);

	for (var i = 0; i < rotateX; i++)
	{
		// +X
		pos.rotateView(2);
		this.isomorphicX[isomorphicIndex] += 1;
	}

	for (var i = 0; i < rotateY; i++)
	{
		// +Y
		pos.rotateView(0);
		this.isomorphicY[isomorphicIndex] += 1;
	}

	for (var i = 0; i < rotateZ; i++)
	{
		// +Z
		pos.rotateView(1);
		this.isomorphicZ[isomorphicIndex] += 1;
	}

	return pos;
}; 

/**
 * 正規化をする。
 * つまり、24個の局面を作り、そのうち代表的な１つを選ぶ。
 */
Normalizer.prototype.normalize = function(sourcePosition, handle)
{
    var isomorphicIndex = 0;
	for (var rotateZ = 0; rotateZ < 4; rotateZ++)
	{
		for (var rotateY = 0; rotateY < 4; rotateY++)
		{
			for (var rotateX = 0; rotateX < 4; rotateX++)
			{
				this.isomorphicPosition[isomorphicIndex] = this.createIsomorphic(sourcePosition, isomorphicIndex, rotateX, rotateY, rotateZ);
				isomorphicIndex++;
			}
		}
	}

	var isomorphicText = [];
	for (var i = 0; i < this.isomorphicPosition.length; i++)
	{
		isomorphicText[i] = this.isomorphicPosition[i].getBoardText();
	}

	// 辞書順ソートする。
	isomorphicText.sort();
	
	// 代表の局面。
	var normalizedBoardText = isomorphicText[0];

	// 何番目のものか。
	var normalizedIndex = 0;
	for (; normalizedIndex < this.isomorphicPosition.length; normalizedIndex++)
	{
		if (normalizedBoardText == isomorphicText[normalizedIndex])
		{
			break;
		}
	}
	
	var normalizedPosition = new Position();
	normalizedPosition.parse(normalizedBoardText);
	
	// 今回 回そうと思っていたハンドルを変更します。
	var normalizedHandle = this.rotateView(normalizedIndex, handle);
	
	return [normalizedPosition, normalizedHandle, this.isomorphicX[normalizedPosition], this.isomorphicY[normalizedPosition], this.isomorphicZ[normalizedPosition]];
};

/**
 * 今回 回そうと思っていたハンドルを変更します。
 */
Normalizer.prototype.rotateView = function(isomorphicIndex, handle)
{
	var rotateButtonGroup = new RotateButtonGroup();
	for (var iView = 0; iView < this.isomorphicX[isomorphicIndex]; iView++)
	{
		// +X
		rotateButtonGroup.rotateView(2);
	}

	for (var iView = 0; iView < this.isomorphicY[isomorphicIndex]; iView++)
	{
		// +Y
		rotateButtonGroup.rotateView(0);
	}

	for (var iView = 0; iView < this.isomorphicZ[isomorphicIndex]; iView++)
	{
		// +Z
		rotateButtonGroup.rotateView(1);
	}

	// 視角を変えたので、対応するハンドルの位置が変わる。
	return rotateButtonGroup.labelArray[handle];
};
