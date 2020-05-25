package com.ssafy.market.domain.history.respository;

import com.ssafy.market.domain.history.domain.History;
import com.ssafy.market.domain.post.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface HistoryRepository extends JpaRepository<History, Long> {
//    List<History> findByUserIdByOrderByCreatedDateDesc(Long UserId);
    List<History> findTop7ByUserIdOrderByCreatedDateDesc(Long UserId);
}