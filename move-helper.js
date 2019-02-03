/**
 * 指し手のユーティリティー。
 */

var reversedMoves = [7, 6, 9, 8, 11, 10, 1, 0, 3, 2, 5, 4];

/** 反対方向のハンドルを取得。 */
function getReversedHandle(handle)
{
	return reversedMoves[handle];
}
