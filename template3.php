<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
global $idCat;
global $idTorg;
?>

					<div class="h2"><?= $arResult['NAME']?></div>

				<div class="stars"><img src="/images/stars.png" alt=""></div>
				<div class="wr">
					<div class="photo">
						<img src="<?= $arResult['DETAIL_PICTURE']['SRC']?>" alt="">
					</div>
					<div class="buy">
						<ul class="btns">
						
							<?$fl=1;?>
							<?$arItemNew = array();?>
							<?$arPriceNew = array();?>
							<?$rs = CIBlockElement::GetList(array('SORT' => 'ASC'), array('IBLOCK_ID' => $idTorg, 'ACTIVE' => 'Y', 'PROPERTY_CML2_LINK' => $arResult['ID'])); $rs->NavStart(9)?>
							<?while ($arItem = $rs->Fetch()):?>
								<?$fl=0;?>
								<?$arItemNew[] = $arItem;?>

							<?endwhile?>
							<?if($fl==0):?>
								<?foreach($arItemNew as $arItem):?>
									<?$ar_res = CCatalogProduct::GetOptimalPrice($arItem['ID'], 1)?>
									<?$arItem["PRICE"] = $ar_res["RESULT_PRICE"]["BASE_PRICE"];?>
									<?$arPriceNew[] = $ar_res["PRICE"]["PRICE"];?>
								<?endforeach;?>
								<?array_multisort($arPriceNew, SORT_ASC, $arItemNew);?>
								<?foreach($arItemNew as $arItem):?>
									<li>
										<div class="l">
											<div class="t2">Есть в наличии</div>
											<?
											$db_props = CIBlockElement::GetProperty($arItem['IBLOCK_ID'],$arItem['ID'], array("sort" => "asc"), Array("CODE"=>"CML2_TRAITS"));
											if($ar_props = $db_props->Fetch()):?>
												<div class="art">Арт. <?=$ar_props["VALUE"]?></div>
											<?endif;?>
										</div>
										<div class="r">
											<div class="pr"><?$ar_res = CCatalogProduct::GetOptimalPrice($arItem['ID'], 1)?><?= $ar_res["RESULT_PRICE"]["BASE_PRICE"]?> р.</div>
											<?
											$enum ="";
											$res = CIBlockElement::GetProperty($idTorg, $arItem['ID'], array("sort" => "asc"), Array("CODE"=>"VES"));
											 while ($ob = $res->GetNext()) {?>
											 <?$enum = $ob['VALUE_ENUM'];?>
														
											<? }
											?>
											<?
											if($enum == "") {
											$res = CIBlockElement::GetProperty($idTorg, $arItem['ID'], array("sort" => "asc"), Array("CODE"=>"RAZMER"));
											 while ($ob = $res->GetNext()) {?>
											 <?$enum = $ob['VALUE_ENUM'];?>
														
											<? }
											}									
											?>
											<div class="varaible"><?=$enum?></div>
											<a href="javascript:void(0)" onclick="cart(<?= $arItem[ID]?>, this)" class="btn">В корзину</a>
										</div>
									</li>
							  <?endforeach;?>

							<?endif;?>
							<?if($fl == 1):?>
								<li>
								<div class="l">
									<?php /*?><div class="t1">Вес – 5 кг</div>*/?>
									<div class="t2">Есть в наличии</div>
									<?if ($arResult['PROPERTIES']['CML2_TRAITS']['VALUE']):?><div class="art">Арт. <?= $arResult['PROPERTIES']['CML2_TRAITS']['VALUE']?></div><?endif?>
								</div>
								<div class="r">
									<div class="pr"><?$ar_res = CCatalogProduct::GetOptimalPrice($arResult['ID'], 1)?><?= $ar_res["RESULT_PRICE"]["BASE_PRICE"]?> р.</div>
									<a href="javascript:void(0)" onclick="cart(<?= $arResult[ID]?>, this)" class="btn">В корзину</a>
								</div>
							</li>
							<?endif;?>
						</ul>
					</div>
				</div>
				<div class="descr">
					<ul class="tabset fade-tabset">
						<?if ($arResult['DETAIL_TEXT']):?><li><a href="#tab1" class="active">Описание</a></li><?endif?>
						<?php /*?><li><a href="#tab2">Характеристики</a></li>
						<li><a href="#tab3">Отзывы</a></li>*/?>
					</ul>
					<?if ($arResult['DETAIL_TEXT']):?>
					<div class="tab-list">
						<?if ($arResult['DETAIL_TEXT']):?><div id="tab1" class="tab">
							<?= $arResult['DETAIL_TEXT']?>
						</div><?endif?><?endif?>
						
					</div>
				</div>
			</div>