/**
 * 正規化をする。
 */
var Normalizer = function()
{
	this.isomorphicPosition = [];
	this.isomorphicX = [];
	this.isomorphicZ = [];
};

/**
 * 同型を作ります。
 */
Normalizer.prototype.createIsomorphic = function(sourcePosition, isomorphicIndex, firstRotation, secondRotation)
{
	var pos = new Position();
	pos.copyFrom(sourcePosition);

	// 色は関係ない。
	switch (firstRotation)
	{
		case 0:
			// そのまま。
			break;

		case 1:
			// +X に1回 倒す。
			pos.rotateView(2);
			this.isomorphicX[isomorphicIndex] += 1;
			break;

		case 2:
			// +X に1回 倒す。
			pos.rotateView(2);
			this.isomorphicX[isomorphicIndex] += 1;

			// +Z に1回 回す。
			pos.rotateView(1);
			this.isomorphicZ[isomorphicIndex] += 1;
			break;

		case 3:
			// +X に1回 倒す。
			pos.rotateView(2);
			this.isomorphicX[isomorphicIndex] += 1;

			// +Z に2回 回す。
			pos.rotateView(1);
			pos.rotateView(1);
			this.isomorphicZ[isomorphicIndex] += 2;
			break;

		case 4:
			// +X に1回 倒す。
			pos.rotateView(2);
			this.isomorphicX[isomorphicIndex] += 1;

			// +Z に3回 回す。
			pos.rotateView(1);
			pos.rotateView(1);
			pos.rotateView(1);
			this.isomorphicZ[isomorphicIndex] += 3;
			break;

		case 5:
			// +X に2回 倒す。
			pos.rotateView(2);
			pos.rotateView(2);
			this.isomorphicX[isomorphicIndex] += 2;
			break;

		default:
			break;
	}

	// 色は関係ない。
	switch (secondRotation)
	{
		case 0:
			break;

		case 1:
			// +Z に1回 回す。
			pos.rotateView(1);
			this.isomorphicZ[isomorphicIndex] += 1;
			break;

		case 2:
			// +Z に2回 回す。
			pos.rotateView(1);
			pos.rotateView(1);
			this.isomorphicZ[isomorphicIndex] += 2;
			break;

		case 3:
			// +Z に3回 回す。
			pos.rotateView(1);
			pos.rotateView(1);
			pos.rotateView(1);
			this.isomorphicZ[isomorphicIndex] += 3;
			break;

		default:
			break;
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
	
    // 色は関係ない。
	for (var firstRotation = 0; firstRotation < 6; firstRotation++)
	{
		for (var secondRotation = 0; secondRotation < 4; secondRotation++)
		{
			this.isomorphicPosition[isomorphicIndex] = this.createIsomorphic(sourcePosition, isomorphicIndex, firstRotation, secondRotation);
			isomorphicIndex++;
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
	
	return [normalizedPosition, normalizedHandle, this.isomorphicX[normalizedPosition], 0, this.isomorphicZ[normalizedPosition]];
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

	for (var iView = 0; iView < this.isomorphicZ[isomorphicIndex]; iView++)
	{
		// +Z
		rotateButtonGroup.rotateView(1);
	}

	// 視角を変えたので、対応するハンドルの位置が変わる。
	return rotateButtonGroup.labelArray[handle];
};
