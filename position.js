// TODO 局面クラスを作りたい。
var Position = function () {
	// 色。 r, g, b, y, v, w.
	this.tiles = ["y", "y", "y", "y", 
		"v", "v", "v", "v",
		"r", "r", "r", "r",
		"b", "b", "b", "b",
		"w", "w", "w", "w",
		"g", "g", "g", "g"];
};
Position.prototype.dump = function () {
	var text = "";
	for (var tile = 0; tile < 24; tile++)
	{
		text += this.tiles[tile];
	}			
	return text;
};
Position.prototype.copyFrom = function (pos) {
	this.tiles = pos.tiles.slice();
};
Position.prototype.parse = function (text) {
	// スラッシュを全て消して詰める。
	text = text.replace(/\//g, "");
	
	// 全ての色をセットする。
	for (var tile = 0; tile < 24; tile++)
	{
		this.tiles[tile] = text[tile];
	}			
};
Position.prototype.getBoardText = function () {
	return this.tiles[0] + this.tiles[1] + this.tiles[2] + this.tiles[3] + "/" +
		this.tiles[4] + this.tiles[5] + this.tiles[6] + this.tiles[7] + "/" +
		this.tiles[8] + this.tiles[9] + this.tiles[10] + this.tiles[11] + "/" +
		this.tiles[12] + this.tiles[13] + this.tiles[14] + this.tiles[15] + "/" +
		this.tiles[16] + this.tiles[17] + this.tiles[18] + this.tiles[19] + "/" +
		this.tiles[20] + this.tiles[21] + this.tiles[22] + this.tiles[23];
};
Position.prototype.shift4 = function (a, b, c, d) {
	var temp = this.tiles[d];
	this.tiles[d] = this.tiles[c];
	this.tiles[c] = this.tiles[b];
	this.tiles[b] = this.tiles[a];
	this.tiles[a] = temp;
};
Position.prototype.rotateOnly = function (handle) {
	switch (handle)
	{
		case 0:
			this.shift4(8, 0, 19, 20);
			this.shift4(10, 2, 17, 22);
			this.shift4(5, 4, 6, 7);
			break;
		case 1:
			this.shift4(9, 1, 18, 21);
			this.shift4(11, 3, 16, 23);
			this.shift4(12, 13, 15, 14);
			break;
		case 2:
			this.shift4(12, 2, 7, 21);
			this.shift4(14, 3, 5, 20);
			this.shift4(9, 8, 10, 11);
			break;
		case 3:
			this.shift4(13, 0, 6, 23);
			this.shift4(15, 1, 4, 22);
			this.shift4(16, 17, 19, 18);
			break;
		case 4:
			this.shift4(9, 13, 17, 5);
			this.shift4(8, 12, 16, 4);
			this.shift4(3, 1, 0, 2);
			break;
		case 5:
			this.shift4(11, 15, 19, 7);
			this.shift4(10, 14, 18, 6);
			this.shift4(21, 23, 22, 20);
			break;
		case 6:
			this.shift4(21, 18, 1, 9);
			this.shift4(23, 16, 3, 11);
			this.shift4(14, 15, 13, 12);
			break;
		case 7:
			this.shift4(20, 19, 0, 8);
			this.shift4(22, 17, 2, 10);
			this.shift4(7, 6, 4, 5);
			break;
		case 8:
			this.shift4(23, 6, 0, 13);
			this.shift4(22, 4, 1, 15);
			this.shift4(18, 19, 17, 16);
			break;
		case 9:
			this.shift4(21, 7, 2, 12);
			this.shift4(20, 5, 3, 14);
			this.shift4(11, 10, 8, 9);
			break;
		case 10:
			this.shift4(7, 19, 15, 11);
			this.shift4(6, 18, 14, 10);
			this.shift4(20, 22, 23, 21);
			break;
		case 11:
			this.shift4(5, 17, 13, 9);
			this.shift4(4, 16, 12, 8);
			this.shift4(2, 0, 1, 3);
			break;
	}			
};
Position.prototype.rotateView = function (handle) {
	switch (handle)
	{
		case 0:

			// +Y
			this.rotateOnly(0);
			this.rotateOnly(1);
			break;
		case 1:

			// +Z
			this.rotateOnly(2);
			this.rotateOnly(3);
			break;
		case 2:

			// +X
			this.rotateOnly(4);
			this.rotateOnly(5);
			break;
		case 3:

			// -Y
			this.rotateOnly(6);
			this.rotateOnly(7);
			break;
		case 4:

			// -Z
			this.rotateOnly(8);
			this.rotateOnly(9);
			break;
		case 5:

			// -X
			this.rotateOnly(10);
			this.rotateOnly(11);
			break;
	}
};

/**
 * TODO 正規化をする。
 * つまり、64個の局面を作り、そのうち代表的な１つを選ぶ。
 */
function normalize(posSource)
{
	var isomorphic = [];

	for (var i = 0; i < 64; i++)
	{
		var pos = new Position();
		pos.copyFrom(posSource);
		isomorphic[i] = pos;

		if (i % 4 == 1)
		{
			// +X
			pos.rotateView(2);
		}
		else if (i % 4 == 2)
		{
			// +X
			pos.rotateView(2);
			pos.rotateView(2);
		}
		else if (i % 4 == 3)
		{
			// +X
			pos.rotateView(2);
			pos.rotateView(2);
			pos.rotateView(2);
		}

		if (i / 4 % 4 == 1)
		{
			// +Y
			pos.rotateView(0);
		}
		else if (i / 4 % 4 == 2)
		{
			// +Y
			pos.rotateView(0);
			pos.rotateView(0);
		}
		else if (i / 4 % 4 == 3)
		{
			// +Y
			pos.rotateView(0);
			pos.rotateView(0);
			pos.rotateView(0);
		}

		if (i / 16 % 4 == 1)
		{
			// +Z
			pos.rotateView(1);
		}
		else if (i / 4 % 4 == 2)
		{
			// +Z
			pos.rotateView(1);
			pos.rotateView(1);
		}
		else if (i / 4 % 4 == 3)
		{
			// +Z
			pos.rotateView(1);
			pos.rotateView(1);
			pos.rotateView(1);
		}
	}

	var isomorphicText = [];
	for (var i = 0; i < 64; i++)
	{
		isomorphicText[i] = isomorphic[i].getBoardText();
	}

	// 辞書順ソートする。
	isomorphicText.sort();
	
	var result = new Position();
	result.parse(isomorphicText[0]);
	return result;
}
