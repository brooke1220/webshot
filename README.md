# webshot
网页快照

###### 请求示例
```
{
    "url": {Host}/image,
    "method": "post",
    "data": {
        "screen_width" => 750,
        "screen_height" => 1334,
        "shot_width" => 750,
        "shot_height" => "all", //all 高度按照所有尺寸 //body 按照body高度 //window 单页
        "delay" => 0,
        "type" => "jpeg",
        "quality" => 75,
        "white" => true
    }
}
```
