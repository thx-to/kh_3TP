package com.kh.totalproject.config;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.json.jackson.JacksonJsonpMapper;
import co.elastic.clients.transport.ElasticsearchTransport;
import co.elastic.clients.transport.rest_client.RestClientTransport;
import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ElasticsearchConfig {

    @Value("${spring.data.elasticsearch.cluster-nodes}")
    private String clusterNodes;

    @Bean
    public ElasticsearchClient elasticsearchClient() {
        // RestClientBuilder로 클러스터 노드 설정
        RestClientBuilder restClientBuilder = RestClient.builder(HttpHost.create(clusterNodes));

        // RestClient 생성
        RestClient restClient = restClientBuilder.build();

        // ElasticsearchClient를 만들기 위한 새로운 설정 방식 (RestClient로부터 ElasticsearchTransport 생성)
        ElasticsearchTransport transport = new RestClientTransport(
                restClient, new JacksonJsonpMapper());

        // ElasticsearchClient 생성
        ElasticsearchClient elasticsearchClient = new ElasticsearchClient(transport);

        return elasticsearchClient;
    }
}


