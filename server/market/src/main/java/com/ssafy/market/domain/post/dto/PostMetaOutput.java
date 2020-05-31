package com.ssafy.market.domain.post.dto;

import com.ssafy.market.domain.hashtag.domain.Hashtag;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostMetaOutput {
    private Long postId;
    private String title;
    private String category;
    private String imgPath;
    private Long price;
    private List<String> hashtag;
    private Boolean isBuy;
    private Long viewCount;
    private String deal;
    private String dealState;
    private String saleDate;
    private String transaction;
    private String createdDate;
    private String modifiedDate;
}
