"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState([]);
  const [sort, setSort] = useState();

  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/admin/submissions", {
          params: { page, limit },
        });

        const { data, meta } = res.data || {};

        setSubmissions(data || []);
        if (meta) {
          setTotal(meta.total ?? 0);
          setTotalPages(meta.totalPages ?? 0);
          if (meta.page && meta.page !== page) {
            setPage(meta.page);
          }
        }
      } catch (err) {
        console.error("Error fetching submissions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, [page, limit]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-gray-400">
        Loading...
      </div>
    );

  const sorted = [...submissions].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();

    if (sort === "newest") return dateB - dateA;
    return dateA - dateB;
  });

  const handlePrev = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((p) => p + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-light tracking-tight text-gray-900 mb-2">
            Submissions
          </h1>
          <p className="text-sm text-gray-500">{total} total</p>
        </div>

        {/* Sort Control */}
        <div className="mb-8 flex items-center gap-3">
          <span className="text-xs text-gray-500 uppercase tracking-wider">
            Sort
          </span>
          <Select value={sort} onValueChange={(value) => setSort(value)}>
            <SelectTrigger className="w-40 h-9 text-sm border-gray-200">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200 bg-gray-50">
                <TableHead className="font-normal text-xs text-gray-600 uppercase tracking-wider">
                  Business
                </TableHead>
                <TableHead className="font-normal text-xs text-gray-600 uppercase tracking-wider">
                  Email
                </TableHead>
                <TableHead className="font-normal text-xs text-gray-600 uppercase tracking-wider">
                  Type
                </TableHead>
                <TableHead className="font-normal text-xs text-gray-600 uppercase tracking-wider">
                  Date
                </TableHead>
                <TableHead className="font-normal text-xs text-gray-600 uppercase tracking-wider w-20"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {sorted.map((item) => {
                return (
                  <TableRow
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="py-4 text-sm text-gray-900">
                      {
                        item.answers.find((i) => i.id === "business_name")
                          .answer
                      }
                    </TableCell>
                    <TableCell className="py-4 text-sm text-gray-600">
                      {
                        item.answers.find((i) => i.id === "contact_email")
                          .answer
                      }
                    </TableCell>
                    <TableCell className="py-4 text-sm text-gray-600">
                      {item.form_type}
                    </TableCell>
                    <TableCell className="py-4 text-sm text-gray-600">
                      {item.created_at
                        ? new Date(item.created_at).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )
                        : "-"}
                    </TableCell>
                    <TableCell className="py-4">
                      <Link
                        href={`/admin/view/${item.id}`}
                        className="text-sm text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        View →
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}

              {sorted.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="py-12 text-center text-sm text-gray-400"
                  >
                    No submissions found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between text-sm">
            <span className="text-gray-500">
              Page {page} of {totalPages}
            </span>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrev}
                disabled={page === 1}
                className="h-9 px-4 text-sm border-gray-200 disabled:opacity-30"
              >
                Previous
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={handleNext}
                disabled={page === totalPages || totalPages === 0}
                className="h-9 px-4 text-sm border-gray-200 disabled:opacity-30"
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
