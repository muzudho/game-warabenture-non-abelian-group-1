/**
 * 回転ボタン。
 */
var RotateButtonGroup = function ()
{
	this.labelArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
};

/**
 * 回転ボタンをずらします。
 */
RotateButtonGroup.prototype.shift4 = function(a, b, c, d)
{
	var tempLabel = this.labelArray[a];
	this.labelArray[a] = this.labelArray[b];
	this.labelArray[b] = this.labelArray[c];
	this.labelArray[c] = this.labelArray[d];
	this.labelArray[d] = tempLabel;
}

/**
 * 回転ボタンを回します。
 * @param handle 回す箇所。0～5。
 */
RotateButtonGroup.prototype.rotateView = function(handle)
{
	switch (handle)
	{
		case 0:

			// +Y
			this.shift4(11, 9, 5, 3);
			this.shift4(10, 8, 4, 2);
			break;
		case 1:

			// +Z
			this.shift4(0, 4, 6, 10);
			this.shift4(1, 5, 7, 11);
			break;
		case 2:

			// +X
			this.shift4(8, 2, 6, 0);
			this.shift4(9, 7, 3, 1);
			break;
		case 3:

			// -Y
			this.shift4(2, 4, 8, 10);
			this.shift4(3, 5, 9, 11);
			break;
		case 4:

			// -Z
			this.shift4(0, 10, 6, 4);
			this.shift4(1, 11, 7, 5);
			break;
		case 5:

			// -X
			this.shift4(0, 2, 4, 8);
			this.shift4(1, 3, 5, 9);
			break;
	}
}
