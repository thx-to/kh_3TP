package com.kh.totalproject.repository;

import com.kh.totalproject.entity.ReportBoard;
import com.kh.totalproject.entity.SuggestionBoard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SuggestionRepository extends JpaRepository<SuggestionBoard, Long>, JpaSpecificationExecutor<SuggestionBoard> {
}
