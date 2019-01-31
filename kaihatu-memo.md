# non-abelian-group-1

## 初期局面。

```Plain
yyyy/vvvv/rrrr/bbbb/wwww/gggg
```

だろうか？

## 正規化。

1手進めた 以下の局面を正規化すると何になるか？

```Plain
yyvv/vgvg/rrrr/ybyb/wwww/bbgg
```

例えば

```Plain
bbyy/yvyv/rrrr/bgbg/wwww/ggvv
```

になるだろうか？

```Plain
bbyy/yvyv/rrrr/bgbg/wwww/ggvv
```

なる。

### +X 回転させてみる。

```Plain
yvyv/wwww/vgvg/rrrr/ybyb/gbgb
```

これを正規化すると以下の通り。

```Plain
rrrr/vvyy/ggvv/bbgg/yybb/wwww
```

正規化して、異なる結果が出ている。

## 初期局面で、正規化できているか？

辞書順なのだから、

```Plain
bbbb/gggg/rrrr/vvvv/wwww/yyyy
```

が選ばれるはず。
こういう隣接はない？

```Plain
CurrentPosition: yyyy/vvvv/rrrr/bbbb/wwww/gggg.
NormalizedPosition: bbbb/gggg/wwww/yyyy/rrrr/vvvv.
[0] yyyy/vvvv/rrrr/bbbb/wwww/gggg 0.
									[1] yyyy/wwww/vvvv/rrrr/bbbb/gggg 8.
																		[2] yyyy/bbbb/wwww/vvvv/rrrr/gggg 2.
																		[3] yyyy/rrrr/bbbb/wwww/vvvv/gggg 6.
																		[4] rrrr/vvvv/gggg/bbbb/yyyy/wwww 0.
																		[5] vvvv/wwww/gggg/rrrr/yyyy/bbbb 8.
																		[6] wwww/bbbb/gggg/vvvv/yyyy/rrrr 2.
																		[7] bbbb/rrrr/gggg/wwww/yyyy/vvvv 6.
																		[8] yyyy/bbbb/wwww/vvvv/rrrr/gggg 6.
																		[9] yyyy/rrrr/bbbb/wwww/vvvv/gggg 0.
[10] yyyy/vvvv/rrrr/bbbb/wwww/gggg 8.
									[11] yyyy/wwww/vvvv/rrrr/bbbb/gggg 2.
																		[12] vvvv/rrrr/yyyy/wwww/gggg/bbbb 2.
																		[13] wwww/vvvv/yyyy/bbbb/gggg/rrrr 6.
																		[14] bbbb/wwww/yyyy/rrrr/gggg/vvvv 0.
																		[15] rrrr/bbbb/yyyy/vvvv/gggg/wwww 8.
																		[16] bbbb/yyyy/rrrr/gggg/wwww/vvvv 4.
																		[17] rrrr/yyyy/vvvv/gggg/bbbb/wwww 4.
																		[18] vvvv/yyyy/wwww/gggg/rrrr/bbbb 4.
																		[19] wwww/yyyy/bbbb/gggg/vvvv/rrrr 4.
																		[20] bbbb/rrrr/gggg/wwww/yyyy/vvvv 2.
																		[21] rrrr/vvvv/gggg/bbbb/yyyy/wwww 6.
																		[22] vvvv/wwww/gggg/rrrr/yyyy/bbbb 0.
																		[23] wwww/bbbb/gggg/vvvv/yyyy/rrrr 8.
																		[24] bbbb/gggg/wwww/yyyy/rrrr/vvvv 10.
																		[25] rrrr/gggg/bbbb/yyyy/vvvv/wwww 10.
																		[26] vvvv/gggg/rrrr/yyyy/wwww/bbbb 10.
																		[27] wwww/gggg/vvvv/yyyy/bbbb/rrrr 10.
																		[28] bbbb/wwww/yyyy/rrrr/gggg/vvvv 8.
																		[29] rrrr/bbbb/yyyy/vvvv/gggg/wwww 2.
																		[30] vvvv/rrrr/yyyy/wwww/gggg/bbbb 6.
																		[31] wwww/vvvv/yyyy/bbbb/gggg/rrrr 0.
[32] yyyy/vvvv/rrrr/bbbb/wwww/gggg 0.
									[33] yyyy/wwww/vvvv/rrrr/bbbb/gggg 8.
																		[34] yyyy/bbbb/wwww/vvvv/rrrr/gggg 2.
																		[35] yyyy/rrrr/bbbb/wwww/vvvv/gggg 6.
																		[36] rrrr/vvvv/gggg/bbbb/yyyy/wwww 0.
																		[37] vvvv/wwww/gggg/rrrr/yyyy/bbbb 8.
																		[38] wwww/bbbb/gggg/vvvv/yyyy/rrrr 2.
																		[39] bbbb/rrrr/gggg/wwww/yyyy/vvvv 6.
																		[40] yyyy/bbbb/wwww/vvvv/rrrr/gggg 6.
																		[41] yyyy/rrrr/bbbb/wwww/vvvv/gggg 0.
[42] yyyy/vvvv/rrrr/bbbb/wwww/gggg 8.
									[43] yyyy/wwww/vvvv/rrrr/bbbb/gggg 2.
																		[44] vvvv/rrrr/yyyy/wwww/gggg/bbbb 2.
																		[45] wwww/vvvv/yyyy/bbbb/gggg/rrrr 6.
																		[46] bbbb/wwww/yyyy/rrrr/gggg/vvvv 0.
																		[47] rrrr/bbbb/yyyy/vvvv/gggg/wwww 8.
[48] yyyy/vvvv/rrrr/bbbb/wwww/gggg 0.
									[49] yyyy/wwww/vvvv/rrrr/bbbb/gggg 8.
																		[50] yyyy/bbbb/wwww/vvvv/rrrr/gggg 2.
																		[51] yyyy/rrrr/bbbb/wwww/vvvv/gggg 6.
																		[52] rrrr/vvvv/gggg/bbbb/yyyy/wwww 0.
																		[53] vvvv/wwww/gggg/rrrr/yyyy/bbbb 8.
																		[54] wwww/bbbb/gggg/vvvv/yyyy/rrrr 2.
																		[55] bbbb/rrrr/gggg/wwww/yyyy/vvvv 6.
																		[56] yyyy/bbbb/wwww/vvvv/rrrr/gggg 6.
																		[57] yyyy/rrrr/bbbb/wwww/vvvv/gggg 0.
[58] yyyy/vvvv/rrrr/bbbb/wwww/gggg 8.
									[59] yyyy/wwww/vvvv/rrrr/bbbb/gggg 2.
																		[60] vvvv/rrrr/yyyy/wwww/gggg/bbbb 2.
																		[61] wwww/vvvv/yyyy/bbbb/gggg/rrrr 6.
																		[62] bbbb/wwww/yyyy/rrrr/gggg/vvvv 0.
																		[63] rrrr/bbbb/yyyy/vvvv/gggg/wwww 8.
```

同じのが何個もある。

3重ループでどうか？ 24個出てきた。

```
CurrentPosition: yyyy/vvvv/rrrr/bbbb/wwww/gggg.
NormalizedPosition: bbbb/gggg/wwww/yyyy/rrrr/vvvv.
[0] yyyy/vvvv/rrrr/bbbb/wwww/gggg 0.
[42] yyyy/vvvv/rrrr/bbbb/wwww/gggg 8.

[1] yyyy/wwww/vvvv/rrrr/bbbb/gggg 8.
[43] yyyy/wwww/vvvv/rrrr/bbbb/gggg 2.

[2] yyyy/bbbb/wwww/vvvv/rrrr/gggg 2.
[40] yyyy/bbbb/wwww/vvvv/rrrr/gggg 6.

[3] yyyy/rrrr/bbbb/wwww/vvvv/gggg 6.
[41] yyyy/rrrr/bbbb/wwww/vvvv/gggg 0.

[24] bbbb/gggg/wwww/yyyy/rrrr/vvvv 10.
[50] bbbb/gggg/wwww/yyyy/rrrr/vvvv 10.

[4] rrrr/vvvv/gggg/bbbb/yyyy/wwww 0.
[21] rrrr/vvvv/gggg/bbbb/yyyy/wwww 6.
[38] rrrr/vvvv/gggg/bbbb/yyyy/wwww 8.
[55] rrrr/vvvv/gggg/bbbb/yyyy/wwww 0.

[5] vvvv/wwww/gggg/rrrr/yyyy/bbbb 8.
[22] vvvv/wwww/gggg/rrrr/yyyy/bbbb 0.
[39] vvvv/wwww/gggg/rrrr/yyyy/bbbb 2.
[52] vvvv/wwww/gggg/rrrr/yyyy/bbbb 8.
				
[6] wwww/bbbb/gggg/vvvv/yyyy/rrrr 2.
[23] wwww/bbbb/gggg/vvvv/yyyy/rrrr 8.
[36] wwww/bbbb/gggg/vvvv/yyyy/rrrr 6.
[53] wwww/bbbb/gggg/vvvv/yyyy/rrrr 2.
				
[7] bbbb/rrrr/gggg/wwww/yyyy/vvvv 6.
[20] bbbb/rrrr/gggg/wwww/yyyy/vvvv 2.
[37] bbbb/rrrr/gggg/wwww/yyyy/vvvv 0.
[54] bbbb/rrrr/gggg/wwww/yyyy/vvvv 6.
				
[8] gggg/vvvv/wwww/bbbb/rrrr/yyyy 0.
[34] gggg/vvvv/wwww/bbbb/rrrr/yyyy 8.
			
[9] gggg/wwww/bbbb/rrrr/vvvv/yyyy 8.
[35] gggg/wwww/bbbb/rrrr/vvvv/yyyy 2.
			
[10] gggg/bbbb/rrrr/vvvv/wwww/yyyy 2.
[32] gggg/bbbb/rrrr/vvvv/wwww/yyyy 6.
			
[11] gggg/rrrr/vvvv/wwww/bbbb/yyyy 6.
[33] gggg/rrrr/vvvv/wwww/bbbb/yyyy 0.
			
[12] wwww/vvvv/yyyy/bbbb/gggg/rrrr 0.
[31] wwww/vvvv/yyyy/bbbb/gggg/rrrr 0.
[46] wwww/vvvv/yyyy/bbbb/gggg/rrrr 8.
[61] wwww/vvvv/yyyy/bbbb/gggg/rrrr 6.
			
[13] bbbb/wwww/yyyy/rrrr/gggg/vvvv 8.
[28] bbbb/wwww/yyyy/rrrr/gggg/vvvv 8.
[47] bbbb/wwww/yyyy/rrrr/gggg/vvvv 2.
[62] bbbb/wwww/yyyy/rrrr/gggg/vvvv 0.

[14] rrrr/bbbb/yyyy/vvvv/gggg/wwww 2.
[29] rrrr/bbbb/yyyy/vvvv/gggg/wwww 2.
[44] rrrr/bbbb/yyyy/vvvv/gggg/wwww 6.
[63] rrrr/bbbb/yyyy/vvvv/gggg/wwww 8.
			
[15] vvvv/rrrr/yyyy/wwww/gggg/bbbb 6.
[30] vvvv/rrrr/yyyy/wwww/gggg/bbbb 6.
[45] vvvv/rrrr/yyyy/wwww/gggg/bbbb 0.
[60] vvvv/rrrr/yyyy/wwww/gggg/bbbb 2.
			
[16] bbbb/yyyy/rrrr/gggg/wwww/vvvv 4.
[58] bbbb/yyyy/rrrr/gggg/wwww/vvvv 4.
		
[17] rrrr/yyyy/vvvv/gggg/bbbb/wwww 4.
[59] rrrr/yyyy/vvvv/gggg/bbbb/wwww 4.
		
[18] vvvv/yyyy/wwww/gggg/rrrr/bbbb 4.
[56] vvvv/yyyy/wwww/gggg/rrrr/bbbb 4.
		
[19] wwww/yyyy/bbbb/gggg/vvvv/rrrr 4.
[57] wwww/yyyy/bbbb/gggg/vvvv/rrrr 4.
		
[25] rrrr/gggg/bbbb/yyyy/vvvv/wwww 10.
[51] rrrr/gggg/bbbb/yyyy/vvvv/wwww 10.
		
[26] vvvv/gggg/rrrr/yyyy/wwww/bbbb 10.
[48] vvvv/gggg/rrrr/yyyy/wwww/bbbb 10.
		
[27] wwww/gggg/vvvv/yyyy/bbbb/rrrr 10.
[49] wwww/gggg/vvvv/yyyy/bbbb/rrrr 10.
```

じゃあ、3重ループで。 18種類に減った。(9個減った。)

```Plain
CurrentPosition: yyyy/vvvv/rrrr/bbbb/wwww/gggg.
NormalizedPosition: bbbb/gggg/wwww/yyyy/rrrr/vvvv.
[0] yyyy/vvvv/rrrr/bbbb/wwww/gggg 0.
[26] yyyy/vvvv/rrrr/bbbb/wwww/gggg 8.

[1] yyyy/wwww/vvvv/rrrr/bbbb/gggg 8.

[2] yyyy/bbbb/wwww/vvvv/rrrr/gggg 2.
[24] yyyy/bbbb/wwww/vvvv/rrrr/gggg 6.

[3] rrrr/vvvv/gggg/bbbb/yyyy/wwww 0.
[13] rrrr/vvvv/gggg/bbbb/yyyy/wwww 6.
[23] rrrr/vvvv/gggg/bbbb/yyyy/wwww 8.

[4] vvvv/wwww/gggg/rrrr/yyyy/bbbb 8.
[14] vvvv/wwww/gggg/rrrr/yyyy/bbbb 0.

[5] wwww/bbbb/gggg/vvvv/yyyy/rrrr 2.
[21] wwww/bbbb/gggg/vvvv/yyyy/rrrr 6.

[6] gggg/vvvv/wwww/bbbb/rrrr/yyyy 0.
[20] gggg/vvvv/wwww/bbbb/rrrr/yyyy 8.

[7] gggg/wwww/bbbb/rrrr/vvvv/yyyy 8.

[8] gggg/bbbb/rrrr/vvvv/wwww/yyyy 2.
[18] gggg/bbbb/rrrr/vvvv/wwww/yyyy 6.

[9] bbbb/yyyy/rrrr/gggg/wwww/vvvv 4.

[10] rrrr/yyyy/vvvv/gggg/bbbb/wwww 4.

[11] vvvv/yyyy/wwww/gggg/rrrr/bbbb 4.

[12] bbbb/rrrr/gggg/wwww/yyyy/vvvv 2.
[22] bbbb/rrrr/gggg/wwww/yyyy/vvvv 0.

[15] bbbb/gggg/wwww/yyyy/rrrr/vvvv 10.

[16] rrrr/gggg/bbbb/yyyy/vvvv/wwww 10.

[17] vvvv/gggg/rrrr/yyyy/wwww/bbbb 10.

[19] gggg/rrrr/vvvv/wwww/bbbb/yyyy 0.

[25] yyyy/rrrr/bbbb/wwww/vvvv/gggg 0.
```

3x3x3 の3重で 18、 4x4x4の3重で 24 なら、
じゃあ、8x8x8 の３重ループで。

```Plain
[0] yyyy/vvvv/rrrr/bbbb/wwww/gggg.
[1] yyyy/wwww/vvvv/rrrr/bbbb/gggg.
[2] yyyy/bbbb/wwww/vvvv/rrrr/gggg.
[3] yyyy/rrrr/bbbb/wwww/vvvv/gggg.
[4] rrrr/vvvv/gggg/bbbb/yyyy/wwww.
[5] vvvv/wwww/gggg/rrrr/yyyy/bbbb.
[6] wwww/bbbb/gggg/vvvv/yyyy/rrrr.
[7] bbbb/rrrr/gggg/wwww/yyyy/vvvv.
[8] gggg/vvvv/wwww/bbbb/rrrr/yyyy.
[9] gggg/wwww/bbbb/rrrr/vvvv/yyyy.
[10] gggg/bbbb/rrrr/vvvv/wwww/yyyy.
[11] gggg/rrrr/vvvv/wwww/bbbb/yyyy.
[12] wwww/vvvv/yyyy/bbbb/gggg/rrrr.
[13] bbbb/wwww/yyyy/rrrr/gggg/vvvv.
[14] rrrr/bbbb/yyyy/vvvv/gggg/wwww.
[15] vvvv/rrrr/yyyy/wwww/gggg/bbbb.
[16] bbbb/yyyy/rrrr/gggg/wwww/vvvv.
[17] rrrr/yyyy/vvvv/gggg/bbbb/wwww.
[18] vvvv/yyyy/wwww/gggg/rrrr/bbbb.
[19] wwww/yyyy/bbbb/gggg/vvvv/rrrr.
[20] bbbb/gggg/wwww/yyyy/rrrr/vvvv.
[21] rrrr/gggg/bbbb/yyyy/vvvv/wwww.
[22] vvvv/gggg/rrrr/yyyy/wwww/bbbb.
[23] wwww/gggg/vvvv/yyyy/bbbb/rrrr.
```

被り無しで 24だった。
